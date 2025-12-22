import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
    children?: React.ReactNode
    className?: string;
    showBG?: boolean;
    isFirst?: boolean;
    borderX?: boolean;
    borderT?: boolean;
    borderB?: boolean;
    fatherRelative?: boolean;
    motherRelative?: boolean;
}

export default function Section({ className, children, showBG, fatherRelative, motherRelative, isFirst = false, borderX = true, borderT = true, borderB = true }: SectionProps) {
    return (
        <section className={cn("w-full border-neutral-800/70",
            borderT && "border-t",
            borderB && "border-b",
            fatherRelative && "relative",
        )}>
            <div className={cn("md:max-w-3xl mx-auto border-neutral-800/70 w-full",
                borderX && "border-x",
                motherRelative && "relative",
            )}>
                <div className={cn("relative z-10", className)}>{children}</div>

                {showBG && (
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundColor: '#0a0a0a',
                            backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
                            backgroundSize: '10px 10px',
                            imageRendering: 'pixelated',
                        }}
                    />
                )}
            </div>
        </section>
    )
}