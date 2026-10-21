import { motion } from 'framer-motion'
import { useCountdown } from '../hooks/useCountdown'
import { wedding } from '../config/wedding'

const units = [
    { key: 'days', label: 'Dias' },
    { key: 'hours', label: 'Horas' },
    { key: 'minutes', label: 'Minutos' },
    { key: 'seconds', label: 'Segundos' },
] as const

export function CountdownSection() {
    const countdown = useCountdown(wedding.date.iso)

    return (
        <section className="section-navy-deep px-3 py-20 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="eyebrow text-(--ivory)/60">
                        Cuenta regresiva para el gran día
                    </p>

                    <div className="mt-10 grid grid-cols-4">
                        {units.map((unit, index) => (
                            <div
                                key={unit.key}
                                className={[
                                    'min-w-0 px-1 py-4 sm:px-4 sm:py-6',
                                    index !== 0
                                        ? 'border-l border-(--ivory)/10'
                                        : '',
                                ].join(' ')}
                            >
                                <motion.p
                                    key={countdown[unit.key]}
                                    initial={{ opacity: 0.5, y: 4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="display-font whitespace-nowrap text-3xl font-normal tabular-nums sm:text-5xl md:text-7xl"
                                >
                                    {String(countdown[unit.key]).padStart(2, '0')}
                                </motion.p>

                                <p className="eyebrow mt-2 whitespace-nowrap text-[9px] text-(--ivory)/45 sm:mt-3 sm:text-xs">
                                    {unit.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

