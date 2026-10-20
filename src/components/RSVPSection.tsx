import { useRef, useState, type FormEvent } from 'react'
import { Check, Loader2 } from 'lucide-react'
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
            setError('Por favor, selecciona si asistirás o no.')
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
                'Hubo un error al enviar tu confirmación. Por favor, inténtalo de nuevo más tarde.',
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <section
            ref={rsvpRef}
            id="rsvp"
            className="scroll-mt-20 bg-(--navy-deep) px-6 py-28 text-(--ivory) sm:py-36"
        >
            <div className="mx-auto max-w-5xl">
                <SectionHeader
                    eyebrow=""
                    title="¿Podrás unirte a nosotros?"
                    description={`Habrá tiempo de confirmar hasta el día ${wedding.rsvp.deadline}.`}
                    light
                />

                <div className="mx-auto mt-16 max-w-2xl">
                    {submitted ? (
                        <SuccessMessage />
                    ) : (
                        <motion.form
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            onSubmit={handleSubmit}
                            className="space-y-10"
                        >
                            {/* Datos del invitado */}
                            <div className="space-y-6">
                                <p className="body-font text-[10px] uppercase tracking-[0.3em] text-(--muted-light)">
                                    Tus datos
                                </p>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <Field
                                        label="Nombre"
                                        required
                                    >
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

                                    <Field
                                        label="Apellido"
                                        required
                                    >
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

                            {/* Confirmación de asistencia */}
                            <Field
                                label="¿Podrás asistir?"
                                required
                            >
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <ChoiceButton
                                        active={form.attending === 'yes'}
                                        onClick={() =>
                                            handleAttendance('yes')
                                        }
                                    >
                                        Sí, asistiré
                                    </ChoiceButton>

                                    <ChoiceButton
                                        active={form.attending === 'no'}
                                        onClick={() =>
                                            handleAttendance('no')
                                        }
                                    >
                                        No, no podré asistir
                                    </ChoiceButton>
                                </div>

                                {!form.attending && (
                                    <p className="mt-3 text-xs text-(--muted-light)">
                                        Por favor, selecciona una opción.
                                    </p>
                                )}
                            </Field>

                            {/* Mensaje opcional */}
                            <Field label="Un mensaje opcional">
                                <textarea
                                    rows={4}
                                    value={form.message}
                                    onChange={(event) =>
                                        updateField(
                                            'message',
                                            event.target.value,
                                        )
                                    }
                                    placeholder="Cualquier mensaje que quieras compartir con nosotros"
                                    className="input resize-none"
                                />
                            </Field>

                            {/* Error de envío */}
                            {error && (
                                <p
                                    role="alert"
                                    className="text-sm text-red-300"
                                >
                                    {error}
                                </p>
                            )}

                            {/* Botón de envío */}
                            <button
                                type="submit"
                                disabled={loading || !form.attending}
                                className="body-font flex w-full items-center justify-center gap-3 border border-(--ivory)/30 px-6 py-4 text-[10px] uppercase tracking-[0.3em] transition hover:bg-(--ivory) hover:text-(--navy) disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {loading ? (
                                    <>
                                        <Loader2
                                            size={15}
                                            className="animate-spin"
                                        />
                                        Enviando confirmación
                                    </>
                                ) : (
                                    'Enviar confirmación'
                                )}
                            </button>
                        </motion.form>
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
            <label className="body-font mb-3 block text-[10px] uppercase tracking-[0.3em] text-(--muted-light)">
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
                'body-font flex items-center justify-center gap-2 border px-4 py-4 text-sm transition',
                active
                    ? 'border-(--ivory) bg-(--ivory) text-(--navy)'
                    : 'border-(--ivory)/20 text-(--muted-light) hover:border-(--ivory)/50',
            ].join(' ')}
        >
            {active && <Check size={14} />}
            {children}
        </button>
    )
}

function SuccessMessage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-(--ivory)/15 px-8 py-16 text-center"
        >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-(--ivory)/30">
                <Check size={18} strokeWidth={1.5} />
            </div>

            <h3 className="display-font mt-8 text-3xl">
                Gracias por confirmar tu asistencia
            </h3>

            <p className="display-font mx-auto mt-4 max-w-md text-sm leading-7 text-(--muted-light)">
                Tu confirmación ha sido recibida. No podemos esperar para
                celebrar contigo.
            </p>
        </motion.div>
    )
}
