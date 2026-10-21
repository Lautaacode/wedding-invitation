import { motion } from 'framer-motion'
import { wedding } from '../config/wedding'
import { PaperGrain } from './PaperGrain'

const links = [
    { label: 'Nuestra historia', href: '#story' },
    { label: 'La noche', href: '#night' },
    { label: 'Vestimenta', href: '#dresscode' },
    { label: 'Ubicación', href: '#stay' },
    { label: 'Galería', href: '#gallery' },
    { label: 'Confirmación', href: '#rsvp' },
    { label: 'Sugerencia de regalos', href: '#registry' },
]

const romanDate = 'XI · XII · MMXXVI'

export function Navigation() {
    return (
        <header
            className="
                section-navy-deep
                fixed
                inset-x-0
                top-0
                z-50
                border-b
                border-(--ivory)/15
                bg-(--navy-deep)/85
                backdrop-blur-md
            "
        >
            <PaperGrain className="paper-grain-nav" />

            <nav
                aria-label="Navegación principal"
                className="
                    relative
                    mx-auto
                    grid
                    w-full
                    max-w-7xl
                    grid-cols-[1fr_auto]
                    items-center
                    gap-3
                    px-5
                    py-4
                    sm:px-8
                    sm:py-5
                    lg:grid-cols-[auto_1fr_auto]
                    lg:gap-6
                    lg:px-10
                    xl:py-6
                "
            >
                {/* Iniciales de la pareja */}
                <a
                    href="#home"
                    aria-label="Volver al inicio"
                    className="couple-initials"
                >
                    <span className="nav-initial">
                        {wedding.couple.firstInitial}
                    </span>

                    <span className="nav-ampersand" aria-hidden="true">
                        &amp;
                    </span>

                    <span className="nav-initial">
                        {wedding.couple.secondInitial}
                    </span>
                </a>

                {/* Navegación desktop */}
                <div
                    className="
                        hidden
                        min-w-0
                        items-center
                        justify-center
                        gap-4
                        lg:flex
                        xl:gap-6
                        2xl:gap-8
                    "
                >
                    {links.map((link, index) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            initial={{ opacity: 0, y: -3 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.06,
                                ease: 'easeOut',
                            }}
                            className="nav-item"
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>

                {/* Fecha romana */}
                <span
                    aria-label="11 de diciembre de 2026"
                    className="nav-date"
                >
                    {romanDate}
                </span>
            </nav>
        </header>
    )
}