import { Church, GlassWater, Utensils, Music, PartyPopper, Cake, Heart } from "lucide-react"

export const wedding = {
    couple: {
        firstName: 'Aldana',
        secondName: 'Lautaro',
        firstInitial: 'A',
        secondInitial: 'L',
    },
    bodyHero: {
        title: 'Nos vamos a casar!',
    },

    date: {
        display: 'Viernes, once de diciembre de dos mil veintiseis',
        roman: 'XI · XII · MMXXVI',
        year: 2026,
        iso: '2026-12-11T21:15:00',
    },

    story: {
        eyebrow: 'Nuestra historia',
        title: 'Caminos cruzados',
        description:
            `A veces, la vida nos cruza mucho antes de que estemos preparados para reconocernos.
    Compartimos caminos y casualidades sin saber que, algún día, nuestros corazones encontrarían la forma de encontrarse.
    Así comenzó nuestra historia: con nervios, abrazos y la certeza de que queríamos quedarnos.
    Quizás no nos encontramos antes porque todavía no era nuestro momento. Y cuando llegó, supimos que queríamos caminar juntos para siempre.
    Hoy, nuestra historia nos trae hasta acá: a elegirnos una vez más, esta vez para toda la vida.`,

        heading: `La casualidad de coincidir`,

        paragraphs: [
            `Mucho antes de conocernos, ya compartíamos lugares, personas y caminos. La vida nos cruzó tantas veces sin que lo supiéramos, como si estuviera preparando nuestro encuentro para el momento indicado. 
            Y así, por un chiste absurdo, unas pocas conversaciones, nervios, un beso inesperado y apenas dos semanas para descubrir que había algo entre nosotros que no necesitaba más tiempo para sentirse verdadero.
            Nos tardamos un poco en coincidir y apenas dos semanas en saberlo, éramos el uno para el otro.
            Hoy, entendemos que cada casualidad nos acercó un poquito más hasta encontrarnos. Y ahora, con el corazón lleno de ilusión, estamos listos para escribir juntos el capítulo más hermoso de nuestra historia, nuestro para siempre`
        ],
    },
    events: [
        {
            numeral: 'I',
            time: '21:15 — 22:15',
            category: 'El comienzo de una nueva etapa',
            title: 'Ceremonia religiosa',
            description:
                'Ante nuestros seres queridos, celebraremos la unión de nuestras vidas y el comienzo de una nueva historia juntos.',
            note: 'Les pedimos llegar unos minutos antes para compartir con nosotros cada instante de este momento tan especial.',
            icon: Church,
        },
        {
            numeral: 'II',
            time: '22:45 — 23:15',
            category: 'Un encuentro especial',
            title: 'Recepción de invitados',
            description:
                'Los esperamos para brindar, compartir sonrisas y disfrutar de la alegría de reunir a todas las personas que queremos.',
            note: 'Un momento para encontrarnos y comenzar a celebrar.',
            icon: GlassWater,
        },
        {
            numeral: 'III',
            time: '23:15 — 23:30',
            category: 'Un momento inolvidable',
            title: 'Entrada de los novios',
            description:
                'Con el corazón lleno de felicidad, haremos nuestra entrada para dar comienzo a una noche que quedará para siempre en nuestros recuerdos.',
            note: '¡Preparen sus aplausos y su energía para recibirnos!',
            icon: Heart,
        },
        {
            numeral: 'IV',
            time: '23:30 — 01:00',
            category: 'Compartiendo la felicidad',
            title: 'La cena',
            description:
                'Una mesa compartida, buena comida y la compañía de quienes hacen nuestra vida más linda. Porque los mejores momentos se disfrutan juntos.',
            note: 'Los invitamos a disfrutar de cada plato, cada charla y cada brindis.',
            icon: Utensils,
        },
        {
            numeral: 'V',
            time: '01:00',
            category: 'Que comience la fiesta',
            title: 'Apertura de la pista',
            description:
                'La música empieza a sonar y la celebración continúa. Es momento de dejar las formalidades de lado y salir a bailar.',
            note: '¡Queremos verlos a todos en la pista!',
            icon: Music,
        },
        {
            numeral: 'VI',
            time: '02:15',
            category: 'Un toque dulce',
            title: 'Mesa dulce',
            description:
                'Una pausa deliciosa para compartir algo dulce y seguir disfrutando de esta noche tan especial.',
            note: 'Siempre hay lugar para algo rico y un recuerdo más.',
            icon: Cake,
        },
        {
            numeral: 'VII',
            time: '02:30',
            category: 'La noche es nuestra',
            title: 'Baile y carioca',
            description:
                'Luces, música, cotillón y toda la energía para vivir el final de la noche como se merece: juntos y sin parar de bailar.',
            note: '¡A disfrutar hasta el último tema!',
            icon: PartyPopper,
        },
    ],

    venue: {
        name: 'Parroquia Inmaculada Concepción',
        type: 'Ceremonia por iglesia',
        address: 'Eugenio de Burzaco 579',
        city: 'Burzaco',
        description:
            `La ceremonia se dara a cabo aqui. Por favor, asegúrese de llegar a tiempo para no perderse el comienzo de la ceremonia.`,
        mapUrl: 'https://maps.app.goo.gl/px3fCWp6ehBiZnw49',
    },

    party: {
        name: 'Quinta residencial del barrio privado',
        type: 'Ubicacion de la fiesta',
        address: 'Francisco Narciso de Laprida 1800',
        city: 'Ministro Rivadavia',
        description:
            `Quinta donde se llevara a cabo la fiesta de celebracion de los novios,
            que se compartira con los invitados presentes`,
        mapUrl: 'https://maps.app.goo.gl/SwtehW4sjDUobH1U7',
    },

    rsvp: {
        deadline: '20 noviembre de 2026',
    },

    registry: {
        title: 'Sugerencia de regalos',
        description:
            `Nuestro mejor regalo es tu presencia, pero si tu deseo es tener un 
            detalle con nosotros puedes hacerlo dentro de un sobre en el momento de la fiesta,
            o podes hacerlo a traves de este link.`,
        alias: 'aldana.soruco.31',
        url: '#',
    },
} as const