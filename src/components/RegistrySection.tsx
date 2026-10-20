import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy, Gift } from 'lucide-react'
import { wedding } from '../config/wedding'

export function RegistrySection() {
    const [copied, setCopied] = useState(false)

    const alias = wedding.registry.alias

    const copyAlias = async () => {
        try {
            await navigator.clipboard.writeText(alias)
            setCopied(true)

            window.setTimeout(() => {
                setCopied(false)
            }, 2500)
        } catch {
            setCopied(false)
        }
    }

    return (
        <section
            id="registry"
            className="section-light px-6 py-28 sm:py-36"
        >
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mx-auto max-w-3xl text-center"
            >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-(--navy)/15">
                    <Gift size={18} strokeWidth={1} />
                </div>

                <p className="eyebrow mt-8 text-(--navy)/55">
                    Un regalo de corazón
                </p>

                <h2 className="display-font mt-5 text-4xl font-normal tracking-[-0.03em] text-(--navy) sm:text-5xl md:text-6xl">
                    {wedding.registry.title}
                </h2>

                <p className="display-font mx-auto mt-7 max-w-xl text-sm leading-7 text-(--muted) sm:text-base">
                    {wedding.registry.description}
                </p>

                <div className="mx-auto mt-9 max-w-sm">
                    <p className="body-font mb-3 text-[10px] uppercase tracking-[0.25em] text-(--muted)">
                        Nuestro alias
                    </p>

                    <div className="flex items-center justify-between gap-3 border border-(--navy)/15 px-4 py-4">
                        <span className="body-font min-w-0 break-all text-sm tracking-wide text-(--navy)">
                            {alias}
                        </span>

                        <button
                            type="button"
                            onClick={copyAlias}
                            className="inline-flex shrink-0 items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-(--navy) transition hover:opacity-60"
                            aria-label="Copiar alias"
                        >
                            {copied ? (
                                <>
                                    <Check size={15} />
                                    Copiado
                                </>
                            ) : (
                                <>
                                    <Copy size={15} />
                                    Copiar
                                </>
                            )}
                        </button>
                    </div>

                    <a
                        href="https://www.mercadopago.com.ar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="body-font mt-5 inline-flex items-center justify-center gap-2 border border-(--navy) px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-(--navy) transition-colors duration-300 hover:bg-(--navy) hover:text-(--white)"
                    >
                        Ir a Mercado Pago
                        <ArrowUpRight
                            size={13}
                            strokeWidth={1.5}
                        />
                    </a>

                    <p className="display-font mt-5 text-xs leading-6 text-(--muted)">
                        Gracias por acompañarnos y ser parte de esta nueva etapa.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}