"use client";
import Section from "@/src/components/section";
import Image from "next/image";
import TextLoopWrapper from "@/src/base/TextLoopWrapper";
import { LuAudioLines } from "react-icons/lu";
import { JSX, useRef } from "react";

export default function HeadlinesSection(): JSX.Element {
    const audioRef = useRef<HTMLAudioElement>(null);

    function toggleAudio() {
        const audio = audioRef.current;
        if (!audio) return;

        audio.currentTime = 0;
        audio.play();
    }
    return (
        <Section className="flex h-38 sm:h-42 md:h-44 overflow-hidden">
            <section className="h-full aspect-square border-r border-neutral-800/70 relative shrink-0">
                <Image
                    height={60}
                    width={60}
                    src={"/images/indian_flag.png"}
                    alt="Rishi Kant"
                    className="object-cover absolute -top-2 left-0 z-50 h-8 w-8 sm:h-10 sm:w-10 md:h-15 md:w-15"
                />
                <div className="rounded-full border border-neutral-800/70 h-full w-full p-0.5 sm:p-1 overflow-hidden">
                    <div className="relative h-full w-full rounded-full overflow-hidden">
                        <Image
                            fill
                            src={"/images/user.jpg"}
                            alt="Rishi Kant"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="flex-1 min-w-0 flex flex-col justify-end text-light">
                <div className="text-light/20 text-sm px-5 border-b border-neutral-800/70 truncate">
                    I build systems that scale.
                </div>
                <div className="text-3xl px-5 flex items-center justify-start font-semibold gap-x-1 border-b border-neutral-800/70">
                    <span>Rishi Kant.</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-4.5 text-info select-none" aria-label="Verified"><path fill="#009bf5" d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"></path></svg>
                    <LuAudioLines onClick={toggleAudio} size={15} className="ml-2 cursor-pointer active:scale-90 active:text-neutral-400 transition-colors duration-700" />
                    <audio ref={audioRef} >
                        <source src="/audio/rishi.mp3" type="audio/mpeg" />
                    </audio>
                </div>
                <div className="min-h-8 py-1 flex items-center justify-start w-full">
                    <TextLoopWrapper
                        className="px-5 text-light/70 text-xs md:text-base font-light"
                        slugs={[
                            "Building scalable backend systems",
                            "Designing real-time architectures",
                            "Working with sockets and async systems",
                            "Learning stacks by building",
                            "Full-stack with backend focus",
                        ]}
                    />

                </div>
            </section>
        </Section>
    )
}