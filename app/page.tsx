import { cn } from "@/lib/utils";
import Nav from "@/src/components/nav";
import Section from "@/src/components/section";
import Image from "next/image";
import TextLoopWrapper from "@/src/base/TextLoopWrapper";
import TickerIformation from "@/src/base/TickerIformation";
import SocialProfile from "@/src/base/SocialProfile";
import AboutSection from "@/src/base/AboutSection";
import { custom_font } from "./layout";
import GithubSection from "@/src/base/GithubSection";
import StackSetion from "@/src/base/StacksSection";
import MyWorkSection from "@/src/base/MyWorkSection";

export default function Home() {
    return (
        <div className="flex flex-col bg-darkest w-full max-w-full overflow-x-hidden">
            <Section borderT={false} className="h-2" borderX={false} borderB={false} isFirst />
            <Nav />
            <Section bgType="dots" motherRelative borderB={false} className={cn("text-light font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] h-48 sm:h-56 md:h-60 flex items-center justify-center text-center px-4", custom_font.className)} showBG={true}>
                Need an Engineer ?
            </Section>
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
            <Section fatherRelative showBG borderT={false} className="text-light flex items-center justify-end gap-x-2 sm:gap-x-4 px-4 h-10 text-sm sm:text-base" />
            <TickerIformation />
            <Section fatherRelative showBG borderT={false} className="text-light flex items-center justify-end gap-x-2 sm:gap-x-4 px-4 h-10 text-sm sm:text-base" />
            <SocialProfile />
            <AboutSection />
            <GithubSection />
            <StackSetion />
            <MyWorkSection />
        </div>
    )
}
