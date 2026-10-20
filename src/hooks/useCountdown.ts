import { useEffect, useState } from 'react'

interface Countdown {
    days: number
    hours: number
    minutes: number
    seconds: number
}

function getCountdown(targetDate: string): Countdown {
    const difference =
        new Date(targetDate).getTime() - Date.now()

    if (difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    return {
        days: Math.floor(
            difference / (1000 * 60 * 60 * 24),
        ),
        hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24,
        ),
        minutes: Math.floor(
            (difference / (1000 * 60)) % 60,
        ),
        seconds: Math.floor(
            (difference / 1000) % 60,
        ),
    }
}

export function useCountdown(targetDate: string) {
    const [countdown, setCountdown] = useState(
        getCountdown(targetDate),
    )

    useEffect(() => {
        const interval = window.setInterval(() => {
            setCountdown(getCountdown(targetDate))
        }, 1000)

        return () => window.clearInterval(interval)
    }, [targetDate])

    return countdown
}