import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { wedding } from '../config/wedding'

export function StaySection() {
    const places = [
        wedding.venue,
        wedding.party,
    ]

    return (
        <section
            id="stay"
            className="section-white px-6 py-28 sm:py-36"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    eyebrow="Las ubicaciones"
                    title="Un día, dos lugares especiales."
                    description="Cada momento de nuestra historia tendrá su lugar. Les compartimos las ubicaciones para que puedan acompañarnos y disfrutar juntos de esta celebración."
                />

                <div className="mt-16 grid gap-px overflow-hidden bg-(--navy)/10 md:mt-20 md:grid-cols-2">
                    {places.map((place, index) => (
                        <motion.article
                            key={place.name}
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
                                margin: '-80px',
                            }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.12,
                            }}
                            className="bg-(--white) p-8 sm:p-12 lg:p-16"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--navy)/15">
                                    <MapPin
                                        size={16}
                                        strokeWidth={1}
                                    />
                                </div>

                                <span className="eyebrow text-right text-(--muted)">
                                    {place.type}
                                </span>
                            </div>

                            <h3 className="display-font mt-12 text-3xl font-normal tracking-[-0.02em] text-(--navy) sm:mt-14 sm:text-4xl">
                                {place.name}
                            </h3>

                            <div className="display-font mt-5 text-sm leading-7 text-(--muted)">
                                <p>{place.address}</p>
                                <p>{place.city}</p>
                            </div>

                            <p className="display-font mt-7 max-w-md text-sm leading-7 text-(--muted)">
                                {place.description}
                            </p>

                            <a
                                href={place.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Ver ubicación de ${place.name} en Google Maps`}
                                className="body-font mt-8 inline-flex items-center gap-2 border-b border-(--navy)/30 pb-2 text-[10px] uppercase tracking-[0.25em] text-(--navy) transition-colors duration-300 hover:border-(--navy) hover:opacity-60"
                            >
                                Cómo llegar
                                <ArrowUpRight
                                    size={13}
                                    strokeWidth={1.5}
                                />
                            </a>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}