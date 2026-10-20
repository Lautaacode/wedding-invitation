import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { wedding } from '../config/wedding'
import { OrnamentalDivider } from './OrnamentalDivider'
import heroBg from '../assets/images/hero_bg.webp'

export function Hero() {
    const backgroundImage = `url("${heroBg}")`

    return (
        <section
            id="home"
            className="
                relative
                isolate
                flex
                min-h-svh
                flex-col
                items-center
                overflow-hidden
                bg-(--ivory)
                px-4
                text-(--ivory)/60
                sm:px-8
            "
        >
            {/* Imagen de fondo */}
            <div
                aria-hidden="true"
                className="
                pointer-events-none
                    absolute
                    inset-0
                    z-0
                    bg-cover
                    bg-no-repeat
                "
                style={{
                    backgroundImage,
                    backgroundPosition: '75% center',
                }}
            />

            {/* Suavizado de la imagen */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-1
                    bg-(--ivory)
                    opacity-10
                "
            />

            {/* Blur progresivo */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-2
                    backdrop-blur-md
                    mask-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.02)_12%,rgba(0,0,0,0.08)_25%,rgba(0,0,0,0.25)_42%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.85)_78%,black_100%)]
                    [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.02)_12%,rgba(0,0,0,0.08)_25%,rgba(0,0,0,0.25)_42%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.85)_78%,black_100%)]
                "
            />

            {/* Contenido principal */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    w-full
                    max-w-5xl
                    flex-1
                    flex-col
                    items-center
                    justify-center
                    py-8
                    text-center
                    sm:py-10
                "
            >
                {/* Introducción */}
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.8 }}
                    className="
                        body-font
                        max-w-full
                        shrink-0
                        text-[9px]
                        font-light
                        uppercase
                        leading-relaxed
                        tracking-[0.18em]
                        sm:text-[10px]
                        sm:tracking-[0.3em]
                        md:text-xs
                    "
                >
                    {wedding.bodyHero.title}
                </motion.p>

                {/* Separador ornamental */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-3 shrink-0 sm:mt-5"
                >
                    <OrnamentalDivider />
                </motion.div>

                {/* Nombres */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                        ease: 'easeOut',
                    }}
                    className="
                        mt-3
                        flex
                        w-full
                        shrink-0
                        flex-col
                        items-center
                        justify-center
                        gap-0
                        px-1
                        sm:mt-4
                    "
                >
                    <span
                        className="
                            script-font
                            block
                            max-w-full
                            text-[clamp(2.5rem,8vh,6.5rem)]
                            leading-[0.95]
                            tracking-normal
                            wrap-anywhere
                            sm:text-[clamp(3.5rem,10vh,7rem)]
                            lg:text-[clamp(4rem,11vh,7.5rem)]
                        "
                    >
                        {wedding.couple.firstName}
                    </span>

                    <span
                        aria-label="y"
                        className="
                            script-font
                            block
                            py-0.5
                            text-[clamp(1.75rem,4vh,3rem)]
                            leading-none
                            sm:py-1
                            sm:text-[clamp(2rem,5vh,3.5rem)]
                        "
                    >
                        &amp;
                    </span>

                    <span
                        className="
                            script-font
                            block
                            max-w-full
                            text-[clamp(2.5rem,8vh,6.5rem)]
                            leading-[0.95]
                            tracking-normal
                            wrap-anywhere
                            sm:text-[clamp(3.5rem,10vh,7rem)]
                            lg:text-[clamp(4rem,11vh,7.5rem)]
                        "
                    >
                        {wedding.couple.secondName}
                    </span>
                </motion.h1>

                {/* Separador ornamental */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-3 shrink-0 sm:mt-5"
                >
                    <OrnamentalDivider />
                </motion.div>

                {/* Fecha */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85, duration: 0.8 }}
                    className="mt-3 shrink-0 sm:mt-5"
                >
                    <p
                        className="
                            display-font
                            text-[clamp(1rem,2.8vh,1.875rem)]
                            italic
                            leading-tight
                            tracking-wide
                            sm:text-[clamp(1.25rem,3.2vh,2rem)]
                        "
                    >
                        {wedding.date.display}
                    </p>
                </motion.div>
            </div>

            {/* Indicador de desplazamiento */}
            <motion.a
                href="#story"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 1 }}
                className="
                    relative
                    z-10
                    mb-3
                    flex
                    shrink-0
                    flex-col
                    items-center
                    gap-1
                    body-font
                    text-[8px]
                    font-light
                    uppercase
                    tracking-[0.18em]
                    transition-opacity
                    duration-300
                    hover:opacity-100
                    sm:mb-4
                    sm:gap-2
                    sm:text-[9px]
                    sm:tracking-[0.25em]
                "
            >
                <span>Desliza para continuar</span>

                <motion.span
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <ArrowDown size={15} strokeWidth={1} />
                </motion.span>
            </motion.a>
        </section>
    )
}
