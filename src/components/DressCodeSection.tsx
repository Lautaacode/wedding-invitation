import { motion } from 'framer-motion'
import { Shirt } from 'lucide-react'
import { SectionHeader } from './SectionHeader'

export function DressCodeSection() {
    return (
        <section
            id="dresscode"
            className="section-light px-6 py-28 sm:py-36"
        >
            <div className="mx-auto w-full max-w-3xl text-center">
                <SectionHeader
                    eyebrow="PARA CELEBRAR JUNTOS"
                    title="Dress Code"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mt-10 flex flex-col items-center"
                >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-current/20">
                        <Shirt
                            size={28}
                            strokeWidth={1}
                            aria-hidden="true"
                        />
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl">
                        Elegante
                    </h3>

                    <p className="mt-5 max-w-xl text-base leading-8 opacity-75 sm:text-lg">
                        Queremos compartir con ustedes un día muy especial.
                        Los invitamos a acompañarnos con un look elegante
                        para celebrar juntos este momento inolvidable.
                    </p>

                    <div className="mt-8 h-px w-16 bg-current/30" />

                    <p className="mt-6 text-sm tracking-wide opacity-65">
                        ¡Los esperamos!
                    </p>
                </motion.div>
            </div>
        </section>
    )
}