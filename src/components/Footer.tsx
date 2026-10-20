
import { wedding } from '../config/wedding'
import { OrnamentalDivider } from './OrnamentalDivider'


export function Footer() {
    return (
        <footer
            className="
                section-navy-deep
                px-5
                pb-8
                pt-16
                sm:px-6
                sm:pt-20
            "
        >
            <div className="mx-auto w-full max-w-7xl">

                {/* Cierre editorial */}

                <div className="text-center">

                    <p
                        className="
                            eyebrow
                            mx-auto
                            max-w-full
                            text-(--ivory)/45
                        "
                    >
                        Gracias por acompañarnos en este día tan especial.
                    </p>

                    {/* Nombres */}

                    <h2
                        className="
                            script-font
                            mx-auto
                            mt-7
                            w-full
                            max-w-full
                            text-[clamp(2.8rem,10vw,7rem)]
                            font-normal
                            leading-[1.05]
                            tracking-normal
                            wrap-anywhere
                            sm:text-[clamp(4rem,8vw,7rem)]
                            sm:leading-[1.1]
                            lg:whitespace-nowrap
                        "
                    >
                        {wedding.couple.firstName}

                        <span className="mx-1 sm:mx-3">
                            &amp;
                        </span>

                        {wedding.couple.secondName}
                    </h2>

                    {/* Fecha */}

                    <p
                        className="
                            display-font
                            mt-6
                            text-base
                            italic
                            text-(--ivory)/65
                            sm:mt-7
                            sm:text-lg
                        "
                    >
                        {wedding.date.display}
                    </p>
                    <div className="mt-8 sm:mt-10">
                        <OrnamentalDivider />
                    </div>
                </div>

                {/* Separador */}

                <div
                    className="
                        mt-14
                        border-t
                        border-(--ivory)/10
                        pt-6
                        sm:mt-20
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            items-center
                            justify-between
                            gap-7
                            md:flex-row
                            md:gap-6
                        "
                    >
                    </div>

                    {/* Iniciales y año */}

                    <p
                        className="
                            body-font
                            mt-8
                            text-center
                            text-[9px]
                            tracking-[0.15em]
                            text-(--ivory)/25
                        "
                    >
                        {wedding.couple.firstInitial}&{wedding.couple.secondInitial} · {wedding.date.year}
                    </p>
                </div>
            </div>
        </footer>
    )
}