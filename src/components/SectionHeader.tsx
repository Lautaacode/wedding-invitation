import { motion } from 'framer-motion'

interface SectionHeaderProps {
    eyebrow: string
    title: string
    description?: string
    light?: boolean
}

export function SectionHeader({
    eyebrow,
    title,
    description,
    light = false,
}: SectionHeaderProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 25,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                margin: '-100px',
            }}
            transition={{
                duration: 0.8,
            }}
            className="mx-auto max-w-3xl text-center"
        >
            <p
                className={[
                    'eyebrow',
                    light
                        ? 'text-(--ivory)/60'
                        : 'text-(--navy)/50',
                ].join(' ')}
            >
                {eyebrow}
            </p>

            <h2
                className={[
                    'subtitle-font mt-5 text-6xl font-normal leading-[0.9] sm:text-7xl md:text-8xl',
                    light
                        ? 'text-(--ivory)'
                        : 'text-(--navy)',
                ].join(' ')}
            >
                {title}
            </h2>

            {description && (
                <p
                    className={[
                        'display-font mx-auto mt-7 max-w-xl text-sm leading-7 sm:text-base',
                        light
                            ? 'text-(--ivory)/65'
                            : 'text-(--muted)',
                    ].join(' ')}
                >
                    {description}
                </p>
            )}
        </motion.div>
    )
}