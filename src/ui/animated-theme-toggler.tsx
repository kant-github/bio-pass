"use client"

import { useCallback, useEffect, useRef } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { IconWrapper } from "../base/TickerIformation"

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
    duration?: number
}

export const AnimatedThemeToggler = ({
    className,
    duration = 400,
    ...props
}: AnimatedThemeTogglerProps) => {
    const { setTheme, resolvedTheme } = useTheme()
    const buttonRef = useRef<HTMLButtonElement>(null)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        const audio = new Audio("/audio/click.wav")
        audio.volume = 0.3
        audio.preload = "auto"
        audio.load()
        audioRef.current = audio
    }, [])

    const isDark = resolvedTheme === "dark"

    const toggleTheme = useCallback(async () => {
        if (!buttonRef.current) return

        if (audioRef.current) {
            audioRef.current.currentTime = 0
            audioRef.current.play().catch(() => { })
        }

        const newTheme = isDark ? "light" : "dark"

        await document.startViewTransition(() => {
            flushSync(() => {
                setTheme(newTheme)
            })
        }).ready

        const { top, left, width, height } =
            buttonRef.current.getBoundingClientRect()
        const x = left + width / 2
        const y = top + height / 2
        const maxRadius = Math.hypot(
            Math.max(left, window.innerWidth - left),
            Math.max(top, window.innerHeight - top)
        )

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration,
                easing: "ease-in-out",
                pseudoElement: "::view-transition-new(root)",
            }
        )
    }, [isDark, duration, setTheme])

    return (
        <button
            ref={buttonRef}
            onClick={toggleTheme}
            className={cn(className)}
            {...props}
        >
            <IconWrapper icon={isDark ? <Sun /> : <Moon />} />
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
