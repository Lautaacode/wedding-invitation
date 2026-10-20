import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import weddingMelody from '../assets/music/bg-song.mp3'

export function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const toggleMusic = async () => {
        const audio = audioRef.current

        if (!audio) return

        if (audio.paused) {
            try {
                await audio.play()
                setIsPlaying(true)
            } catch (error) {
                console.error('No se pudo reproducir la música:', error)
                setIsPlaying(false)
            }
        } else {
            audio.pause()
            setIsPlaying(false)
        }
    }

    useEffect(() => {
        const audio = audioRef.current

        if (!audio) return

        // Volumen inicial al 20%
        audio.volume = 0.3

        const handlePlay = () => setIsPlaying(true)
        const handlePause = () => setIsPlaying(false)

        audio.addEventListener('play', handlePlay)
        audio.addEventListener('pause', handlePause)

        return () => {
            audio.removeEventListener('play', handlePlay)
            audio.removeEventListener('pause', handlePause)
        }
    }, [])

    return (
        <>
            <audio
                ref={audioRef}
                src={weddingMelody}
                loop
                preload="auto"
            />

            <button
                type="button"
                onClick={toggleMusic}
                aria-label={
                    isPlaying
                        ? 'Silenciar música'
                        : 'Reproducir música'
                }
                aria-pressed={isPlaying}
                title={
                    isPlaying
                        ? 'Silenciar música'
                        : 'Reproducir música'
                }
                className="
                cursor-pointer
                    fixed bottom-6 right-6 z-50
                    flex h-12 w-12 items-center justify-center
                    rounded-full border border-white/40
                    bg-white/90 text-stone-700
                    shadow-lg backdrop-blur-md
                    transition-all duration-300
                    hover:scale-105 hover:bg-white
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-stone-500
                "
            >
                {isPlaying ? (
                    <Volume2 size={21} strokeWidth={1.6} />
                ) : (
                    <VolumeX size={21} strokeWidth={1.6} />
                )}
            </button>
        </>
    )
}