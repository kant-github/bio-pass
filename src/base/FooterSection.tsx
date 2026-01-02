"use client";
import { JSX, useRef } from "react";
import Section from "../components/section";
import { useInView, motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function FooterSection(): JSX.Element {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true })
    const { resolvedTheme } = useTheme()

    const darkGradient = "radial-gradient(125% 125% at 50% 10%, transparent 40%, #0f0f0f 100%)"
    const lightGradient = "radial-gradient(125% 125% at 50% 10%, transparent 40%, #f5f5f5 100%)"

    return (
        <Section
            fatherRelative={true}
            borderX={false}
            borderT={false}
            borderB={false}
            className="overflow-hidden"
            fatherBackground={
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: resolvedTheme === "dark" ? darkGradient : lightGradient,
                    }}
                />
            }
        >
            <div ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.4, ease: "easeOut", type: "tween" }}
                    className="flex items-end justify-center text-[4rem] sm:text-[6rem] md:text-[8rem] font-bold text-transparent bg-clip-text bg-linear-to-b dark:from-neutral-600 dark:via-neutral-900/20 dark:to-black/10 from-neutral-700 via-neutral-100 to-neutral-50/50 translate-y-8 md:translate-y-12"
                >
                    RISHI KANT
                </motion.div>
            </div>

        </Section>
    )
}