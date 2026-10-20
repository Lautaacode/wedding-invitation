import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'

const photos = [
    {
        src: 'src/assets/images/campanopolis.jpg',
        alt: 'campanopolis',
        className: 'md:col-span-2 md:row-span-2',
        mobilePosition: 'center center',
        desktopPosition: 'center center',
    },
    {
        src: 'src/assets/images/wicka.jpg',
        alt: 'wicka',
        className: 'md:col-span-1 md:row-span-1',
        mobilePosition: 'center center',
        desktopPosition: 'center 10%',
    },
    {
        src: 'src/assets/images/umbrella.jpg',
        alt: 'umbrella',
        className: 'md:col-span-1 md:row-span-2',
        mobilePosition: 'center center',
        desktopPosition: 'center 10%',
    },
    {
        src: 'src/assets/images/new_year.jpg',
        alt: 'new year',
        className: 'md:col-span-1 md:row-span-2',
        mobilePosition: 'center center',
        desktopPosition: 'center center',
    },
    {
        src: 'src/assets/images/conection.jpg',
        alt: 'conection',
        className: 'md:col-span-1 md:row-span-1',
        mobilePosition: 'center center',
        desktopPosition: 'center center',
    },
    {
        src: 'src/assets/images/adrogue_coffee.jpg',
        alt: 'adrogue coffee',
        className: 'md:col-span-1 md:row-span-1',
        mobilePosition: 'center center',
        desktopPosition: 'center 10%',
    },{
        src: 'src/assets/images/grandma_garden.jpg',
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
