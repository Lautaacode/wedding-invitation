
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
                    title="Código de vestimenta"
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
                        Elegante Sport
                    </h3>

                    <p className="mt-5 max-w-xl text-base leading-8 opacity-75 sm:text-lg">
                        Los invitamos a acompañarnos con un look elegante
                        y relajado, ideal para disfrutar y celebrar juntos
                        este día tan especial.
                    </p>

                    <p className="mt-5 max-w-xl text-sm leading-7 opacity-80 sm:text-base">
                        ¡También pueden traer su traje de baño para
                        disfrutar de la piscina!
                    </p>

                    <div className="mt-8 h-px w-16 bg-current/30" />

                    <p className="mt-6 text-xs uppercase tracking-[0.2em] opacity-60">
                        A tener en cuenta
                    </p>

                    <p className="mt-3 max-w-lg text-sm leading-7 opacity-80 sm:text-base">
                        Les pedimos que eviten utilizar los colores
                        <span className="font-semibold"> blanco </span>
                        y
                        <span className="font-semibold"> azul marino</span>.
                        ¡Gracias por ayudarnos a cuidar cada detalle!
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
