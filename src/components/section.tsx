import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
    children?: React.ReactNode
    className?: string;
    showBG?: boolean;
    bgType?: "dots" | "slash";
    isFirst?: boolean;
    borderX?: boolean;
    borderT?: boolean;
    borderB?: boolean;
    fatherRelative?: boolean;
    motherRelative?: boolean;
}

export default function Section({ className, children, showBG, fatherRelative, motherRelative, bgType = 'slash', borderX = true, borderT = true, borderB = true }: SectionProps) {
    return (
        <section className={cn("w-full border-border md:px-0 px-4",
            borderT && "border-t",
            borderB && "border-b",
            fatherRelative && "relative",
        )}>
            <div className={cn("w-full mx-auto border-border max-w-full sm:max-w-3xl md:max-w-3xl lg:max-w-3xl",
                borderX && "border-x",
                motherRelative && "relative",
            )}>
                <div className={cn("relative z-10", className)}>{children}</div>

                {showBG && (
                    bgType === 'slash' ? (
                        <div
                            className="absolute inset-0 z-0 pointer-events-none dark:bg-transparent bg-transparent"
                            style={{
                                backgroundImage: `
        repeating-linear-gradient(-45deg,
          var(--theme-border) 0px,
          transparent 2px,
          transparent 2px,
          transparent 6px
        )
      `,
                            }}
                        />
                    ) : (
                        <div
                            className="absolute inset-0 z-0 bg-darkest"
                            style={{
                                backgroundImage: `
       radial-gradient(circle at 25% 25%, var(--theme-border) 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, var(--theme-border) 0.5px, transparent 1px)
     `,
                                backgroundSize: '10px 10px',
                                imageRendering: 'pixelated',
                            }}
                        />
                    )
                )}

            </div>
        </section>
    )
}


