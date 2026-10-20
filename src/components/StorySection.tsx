import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { wedding } from '../config/wedding'
import storyImage from '../assets/images/our_history.webp'

export function StorySection() {
    return (
        <section
            id="story"
            className="section-light overflow-x-clip px-6 py-28 sm:py-36"
        >
            <div className="mx-auto w-full max-w-6xl">
                <SectionHeader
                    eyebrow={wedding.story.eyebrow}
                    title={wedding.story.title}
                    description={wedding.story.description}
                />

                <div className="mt-20 grid min-w-0 gap-12 md:grid-cols-2 md:items-center">
                    {/* Foto */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9 }}
                        className="aspect-4/5 min-w-0 overflow-hidden bg-(--navy-soft)"
                    >
                        <img
                            src={storyImage}
                            alt="Nuestra historia"
                            className="h-full w-full object-cover object-[37%_center]"
                        />
                    </motion.div>

                    {/* Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.1,
                        }}
                        className="min-w-0 max-w-lg md:pl-10"
                    >
                        <p className="display-font whitespace-pre-line text-3xl leading-tight text-(--navy) sm:text-4xl">
                            {wedding.story.heading}
                        </p>

                        <div className="display-font mt-8 space-y-5 text-sm leading-7 text-(--muted)">
                            {wedding.story.paragraphs.map((paragraph) => (
                                <p
                                    key={paragraph}
                                    className="wrap-break-word"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
