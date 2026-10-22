import { useRef, useState, type FormEvent } from 'react'
import { Check, Loader2, CalendarCheck, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { submitRSVP } from '../services/rsvp'
import { wedding } from '../config/wedding'

interface FormData {
    firstName: string
    lastName: string
    phone: string
    attending: 'yes' | 'no' | ''
    message: string
}

const initialForm: FormData = {
    firstName: '',
    lastName: '',
    phone: '',
    attending: '',
    message: '',
}

export function RSVPSection() {
    const rsvpRef = useRef<HTMLElement>(null)

    const [form, setForm] = useState<FormData>(initialForm)
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const updateField = <K extends keyof FormData>(
        field: K,
        value: FormData[K],
    ) => {
        setForm((current) => ({
            ...current,
            [field]: value,
        }))
    }

    const handleAttendance = (value: 'yes' | 'no') => {
        setForm((current) => ({
            ...current,
            attending: value,
        }))
        setError('')
    }

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault()

        if (!form.attending) {
            setError('Por favor, seleccioná si vas a asistir o no.')
            return
        }

        setLoading(true)
        setError('')

        try {
            await submitRSVP({
                name: `${form.firstName.trim()} ${form.lastName.trim()}`.trim(),
                firstName: form.firstName.trim(),
                lastName: form.lastName.trim(),
                phone: form.phone.trim(),
                attending: form.attending,
                message: form.message.trim(),
            })

            setSubmitted(true)

            requestAnimationFrame(() => {
                rsvpRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            })
        } catch (error) {
            console.error('RSVP submission failed:', error)
            setError(
                'Hubo un error al enviar tu confirmación. Por favor, intentá nuevamente más tarde.',
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <section
            ref={rsvpRef}
            id="rsvp"
            className="scroll-mt-20 bg-(--navy-deep) px-6 py-20 text-(--ivory) sm:py-28"
        >
            <div className="mx-auto max-w-5xl">
                <SectionHeader
                    eyebrow="UN MOMENTO IMPORTANTE"
                    title="¿Podrás unirte a nosotros?"
                    description={`Confirmá tu asistencia antes del ${wedding.rsvp.deadline}.`}
                    light
                />

                <div className="mx-auto mt-10 max-w-2xl">
                    {submitted ? (
                        <SuccessMessage />
                    ) : (
                        <>
                            {/* AVISO DESTACADO */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-10 rounded-xl border-2 border-(--ivory)/50 bg-(--ivory)/10 p-6 text-center shadow-lg sm:p-8"
                            >
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-(--ivory) text-(--navy-deep)">
                                    <CalendarCheck size={28} strokeWidth={1.8} />
                                </div>

                                <p className="body-font text-lg font-bold uppercase tracking-[0.12em] text-(--ivory) sm:text-xl">
                                    ¡Importante!
                                </p>

                                <p className="mt-3 text-base leading-7 text-(--ivory) sm:text-lg">
                                    Necesitamos que confirmes si vas a asistir
                                    o no antes de la fecha límite.
                                </p>

                                <div className="mt-5 inline-flex items-center gap-2 rounded-md bg-(--ivory) px-4 py-3 text-(--navy-deep)">
                                    <AlertCircle size={19} />
                                    <span className="text-sm font-bold uppercase tracking-wide">
                                        No te olvides de responder
                                    </span>
                                </div>
                            </motion.div>

                            <motion.form
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-10"
                            >
                                {/* DATOS DEL INVITADO */}
                                <div className="space-y-6">
                                    <p className="body-font text-xs font-semibold uppercase tracking-[0.2em] text-(--muted-light)">
                                        01 — Tus datos
                                    </p>

                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <Field label="Nombre" required>
                                            <input
                                                type="text"
                                                required
                                                autoComplete="given-name"
                                                value={form.firstName}
                                                onChange={(event) =>
                                                    updateField(
                                                        'firstName',
                                                        event.target.value,
                                                    )
                                                }
                                                placeholder="Tu nombre"
                                                className="input"
                                            />
                                        </Field>

                                        <Field label="Apellido" required>
                                            <input
                                                type="text"
                                                required
                                                autoComplete="family-name"
                                                value={form.lastName}
                                                onChange={(event) =>
                                                    updateField(
                                                        'lastName',
                                                        event.target.value,
                                                    )
                                                }
                                                placeholder="Tu apellido"
                                                className="input"
                                            />
                                        </Field>
                                    </div>

                                    <Field
                                        label="Número de teléfono"
                                        required
                                    >
                                        <input
                                            type="tel"
                                            required
                                            autoComplete="tel"
                                            inputMode="tel"
                                            value={form.phone}
                                            onChange={(event) =>
                                                updateField(
                                                    'phone',
                                                    event.target.value,
                                                )
                                            }
                                            placeholder="+54 9 11 1234-5678"
                                            className="input"
                                        />
                                    </Field>
                                </div>

                                {/* CONFIRMACIÓN DE ASISTENCIA */}
                                <Field
                                    label="02 — ¿Podrás acompañarnos?"
                                    required
                                >
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <ChoiceButton
                                            active={form.attending === 'yes'}
                                            onClick={() =>
                                                handleAttendance('yes')
                                            }
                                        >
                                            Sí, voy a asistir
                                        </ChoiceButton>

                                        <ChoiceButton
                                            active={form.attending === 'no'}
                                            onClick={() =>
                                                handleAttendance('no')
                                            }
                                        >
                                            No podré asistir
                                        </ChoiceButton>
                                    </div>

                                    {!form.attending && (
                                        <p className="mt-3 text-sm text-(--muted-light)">
                                            Seleccioná una opción para continuar.
                                        </p>
                                    )}
                                </Field>

                                {/* MENSAJE OPCIONAL */}
                                <Field label="03 — Mensaje opcional">
                                    <textarea
                                        rows={4}
                                        value={form.message}
                                        onChange={(event) =>
                                            updateField(
                                                'message',
                                                event.target.value,
                                            )
                                        }
                                        placeholder="Si te corresponde un acompañante (+1), escribí su nombre acá. También podés dejarnos un mensaje."
                                        className="input resize-none"
                                    />
                                </Field>

                                {/* ERROR DE ENVÍO */}
                                {error && (
                                    <p
                                        role="alert"
                                        className="rounded-lg border border-red-300/40 bg-red-400/10 p-4 text-sm text-red-200"
                                    >
                                        {error}
                                    </p>
                                )}

                                {/* BOTÓN DE ENVÍO DESTACADO */}
                                <div className="pt-8">
                                    <p className="mb-5 text-center text-sm leading-6 text-(--muted-light)">
                                        Revisá tus datos y enviá tu respuesta.
                                        ¡Es importante que todos confirmen!
                                    </p>

                                    <button
                                        type="submit"
                                        disabled={loading || !form.attending}
                                        className="body-font flex min-h-16 w-full items-center justify-center gap-3 rounded-md border-2 border-(--ivory) bg-(--ivory) px-6 py-5 text-sm font-bold uppercase tracking-[0.12em] text-(--navy-deep) shadow-lg transition duration-300 hover:scale-[1.01] hover:bg-transparent hover:text-(--ivory) disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 sm:text-base"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2
                                                    size={20}
                                                    className="animate-spin"
                                                />
                                                Enviando confirmación...
                                            </>
                                        ) : (
                                            <>
                                                <Check size={21} strokeWidth={2.5} />
                                                Enviar mi confirmación
                                            </>
                                        )}
                                    </button>

                                    <p className="mt-4 text-center text-xs leading-5 text-(--muted-light)">
                                        Tu respuesta nos ayuda a organizar
                                        este día tan especial.
                                    </p>
                                </div>
                            </motion.form>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

interface FieldProps {
    label: string
    required?: boolean
    children: React.ReactNode
}

function Field({
    label,
    required,
    children,
}: FieldProps) {
    return (
        <div>
            <label className="body-font mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-(--muted-light)">
                {label}
                {required && ' *'}
            </label>

            {children}
        </div>
    )
}

interface ChoiceButtonProps {
    active: boolean
    onClick: () => void
    children: React.ReactNode
}

function ChoiceButton({
    active,
    onClick,
    children,
}: ChoiceButtonProps) {
    return (
        <button
            type="button"
            aria-pressed={active}
            onClick={onClick}
            className={[
                'body-font flex min-h-16 items-center justify-center gap-3 rounded-md border-2 px-4 py-5 text-sm font-semibold transition duration-200 sm:text-base',
                active
                    ? 'border-(--ivory) bg-(--ivory) text-(--navy-deep) shadow-md'
                    : 'border-(--ivory)/40 bg-transparent text-(--ivory) hover:border-(--ivory) hover:bg-(--ivory)/10',
            ].join(' ')}
        >
            {active && <Check size={19} strokeWidth={2.5} />}
            {children}
        </button>
    )
}

function SuccessMessage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-(--ivory)/30 px-8 py-16 text-center"
        >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-(--ivory)/50">
                <Check size={28} strokeWidth={1.8} />
            </div>

            <h3 className="display-font mt-8 text-3xl sm:text-4xl">
                ¡Muchas gracias!
            </h3>

            <p className="display-font mx-auto mt-4 max-w-md text-base leading-7 text-(--muted-light)">
                Tu confirmación fue recibida correctamente.
                ¡Tenemos muchas ganas de compartir este día con vos!
            </p>
        </motion.div>
    )
}
