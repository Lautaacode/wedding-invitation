import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import campanopolis from '../assets/images/campanopolis.webp'
import wicka from '../assets/images/wicka.webp'
import umbrella from '../assets/images/umbrella.webp'
import newYear from '../assets/images/new_year.webp'
import conection from '../assets/images/conection.webp'
import adrogueCoffee from '../assets/images/adrogue_coffee.webp'
import grandmaGarden from '../assets/images/grandma_garden.webp'

const photos = [
    {
        src: campanopolis,
        alt: 'campanopolis',
        className: 'md:col-span-2 md:row-span-2',
        mobilePosition: 'center center',
        desktopPosition: 'center center',
    },
    {
        src: wicka,
        alt: 'wicka',
        className: 'md:col-span-1 md:row-span-1',
        mobilePosition: 'center center',
        desktopPosition: 'center 10%',
    },
    {
        src: umbrella,
        alt: 'umbrella',
        className: 'md:col-span-1 md:row-span-2',
        mobilePosition: 'center center',
        desktopPosition: 'center 10%',
    },
    {
        src: newYear,
        alt: 'new year',
        className: 'md:col-span-1 md:row-span-2',
        mobilePosition: 'center center',
        desktopPosition: 'center center',
    },
    {
        src: conection,
        alt: 'conection',
        className: 'md:col-span-1 md:row-span-1',
        mobilePosition: 'center center',
        desktopPosition: 'center center',
    },
    {
        src: adrogueCoffee,
        alt: 'adrogue coffee',
        className: 'md:col-span-1 md:row-span-1',
        mobilePosition: 'center center',
        desktopPosition: 'center 10%',
    },{
        src: grandmaGarden,
        alt: 'grandma garden',
        className: 'md:col-span-1 md:row-span-1',
        mobilePosition: 'center center',
        desktopPosition: 'center center',
    },
]

export function GallerySection() {
    return (
        <section
            id="gallery"
            className="section-light px-6 py-20 sm:py-28 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Galeria"
                    title="Algunos recuerdos a lo largo de nuestro camino"
                    description="Algunos de nuestros recuerdos favoritos, desde mañanas tranquilas hasta los días más felices."
                />

                <div
                    className="
                        mt-14
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                        md:mt-20
                        md:grid-cols-4
                        md:auto-rows-45
                        lg:auto-rows-55
                    "
                >
                    {photos.map((photo, index) => (
                        <motion.figure
                            key={photo.src}
                            initial={{
                                opacity: 0,
                                y: 24,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                margin: '-60px',
                            }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.08,
                            }}
                            className={[
                                'group relative min-h-60 overflow-hidden bg-(--navy-soft)',
                                'md:min-h-0',
                                photo.className,
                            ].join(' ')}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                loading="lazy"
                                className="
                                    absolute
                                    inset-0
                                    h-full
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    ease-out
                                    group-hover:scale-[1.02]
                                "
                                style={{
                                    objectPosition: photo.mobilePosition,
                                }}
                            />

                            <style>
                                {`
                                    @media (min-width: 768px) {
                                        .gallery-photo-${index} {
                                            object-position: ${photo.desktopPosition};
                                        }
                                    }
                                `}
                            </style>

                            <img
                                src={photo.src}
                                alt=""
                                aria-hidden="true"
                                className="hidden"
                            />

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    bg-(--navy)/0
                                    transition-colors
                                    duration-500
                                    group-hover:bg-(--navy)/10
                                "
                            />
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    )
}
