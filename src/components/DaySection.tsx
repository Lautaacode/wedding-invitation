
import { motion } from 'framer-motion'
import { Church } from 'lucide-react'
import { wedding } from '../config/wedding'
import { SectionHeader } from './SectionHeader'

export function DaySection() {
    return (
        <section
            id="night"
            className="section-white px-6 py-28 sm:py-36"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    eyebrow="La gran noche"
                    title="Cronograma de la boda"
                    description="Aqui dejamos un resumen de los eventos que se llevaran a cabo durante la boda."
                />

                <div className="relative mx-auto mt-20 max-w-4xl">
                    {/* Central timeline */}
                    <div className="absolute bottom-0 left-4 top-0 w-px bg-(--navy)/10 md:left-1/2 md:-translate-x-1/2" />

                    <div className="space-y-16 md:space-y-24">
                        {wedding.events.map((event, index) => {
                            const Icon = event.icon
                            const isEven = index % 2 === 0

                            return (
                                <motion.div
                                    key={event.numeral}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
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
                                        delay: index * 0.08,
                                    }}
                                    className="relative grid grid-cols-[32px_1fr] gap-6 md:grid-cols-2 md:gap-16"
                                >
                                    {/* Timeline marker */}
                                    <div className="absolute left-4 top-1 z-10 flex h-2 w-2 -translate-x-1/2 items-center justify-center rounded-full bg-(--navy) md:left-1/2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-(--white)" />
                                    </div>

                                    {/* Desktop: alternating layout */}
                                    <div
                                        className={[
                                            'hidden md:block',
                                            isEven
                                                ? 'text-left'
                                                : 'md:col-start-2 text-left',
                                        ].join(' ')}
                                    >
                                        <EventContent
                                            numeral={event.numeral}
                                            time={event.time}
                                            category={event.category}
                                            title={event.title}
                                            description={event.description}
                                            note={event.note}
                                            Icon={Icon}
                                        />
                                    </div>

                                    {/* Mobile */}
                                    <div className="col-start-2 md:hidden">
                                        <EventContent
                                            numeral={event.numeral}
                                            time={event.time}
                                            category={event.category}
                                            title={event.title}
                                            description={event.description}
                                            note={event.note}
                                            Icon={Icon}
                                        />
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

interface EventContentProps {
    numeral: string
    time: string
    category: string
    title: string
    description: string
    note: string
    Icon: typeof Church
}

function EventContent({
    numeral,
    time,
    category,
    title,
    description,
    note,
    Icon,
}: EventContentProps) {
    return (
        <div className="max-w-md text-left">
            {/* Roman numeral and category */}
            <div className="mb-3 flex items-baseline justify-start gap-4">
                <span className="swash text-4xl leading-none text-(--color-burgundy)">
                    {numeral}
                </span>

                <span className="eyebrow text-(--muted)">
                    {category}
                </span>
            </div>

            {/* Event time and icon */}
            <div className="mb-3 flex items-center justify-start gap-3">
                <Icon
                    size={16}
                    strokeWidth={1}
                    className="shrink-0 text-(--color-burgundy)"
                />

                <span className="font-mono text-sm tabular-nums text-(--color-burgundy)">
                    {time}
                </span>
            </div>

            {/* Event title */}
            <h3 className="display-font mb-3 text-3xl font-normal leading-tight tracking-[-0.02em] text-(--navy) sm:text-4xl">
                {title}
            </h3>

            {/* Main description */}
            <p className="mb-4 text-sm leading-relaxed text-(--muted)ext-base">
                {description}
            </p>

            {/* Secondary note */}
            <p className="eyebrow text-(--navy)/60">
                {note}
            </p>
        </div>
    )
}
