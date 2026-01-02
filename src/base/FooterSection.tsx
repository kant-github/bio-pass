"use client";
import { JSX, useRef } from "react";
import Section from "../components/section";
import { useInView, motion } from "framer-motion";

export default function FooterSection(): JSX.Element {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true })


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
                        background: "radial-gradient(125% 125% at 50% 10%, transparent 40%, #0f0f0f 100%)",
                    }}
                />
            }
        >
            <div ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.4, ease: "easeOut", type: "tween" }}
                    className="flex items-end justify-center text-[8rem] font-bold text-transparent bg-clip-text bg-linear-to-b from-neutral-600 via-neutral-900/20 to-black/10 translate-y-12"
                >
                    RISHI KANT
                </motion.div>
            </div>

        </Section>
    )
}