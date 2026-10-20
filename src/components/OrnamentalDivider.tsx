export function OrnamentalDivider() {
    return (
        <svg
            viewBox="0 0 200 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            className="mx-auto mb-8 w-44 text-(--ivory)/60"
            aria-hidden="true"
        >
            <line x1="0" y1="12" x2="80" y2="12" />
            <line x1="120" y1="12" x2="200" y2="12" />

            <circle cx="100" cy="12" r="3.5" />

            <circle
                cx="100"
                cy="12"
                r="0.8"
                fill="currentColor"
            />

            <line x1="86" y1="12" x2="94" y2="12" />
            <line x1="106" y1="12" x2="114" y2="12" />
        </svg>
    )
}
