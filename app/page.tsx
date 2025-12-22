import { cn } from "@/lib/utils";
import Nav from "@/src/components/nav";
import Section from "@/src/components/section";
import { custom_font } from "./layout";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex h-screen flex-col bg-darkest">
            <Section borderT={false} className="h-2" borderX={false} borderB={false} isFirst />
            <Nav />
            <Section motherRelative borderB={false} className={cn("text-light font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] h-48 sm:h-56 md:h-60 flex items-center justify-center text-center px-4", custom_font.className)} showBG={true}>
                Not a Frontend Engineer.
            </Section>
            <Section className="flex h-38 sm:h-42 md:h-44">
                <div className="h-full aspect-square border-r border-neutral-800/70 relative">
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
                </div>
            </Section>
            <Section fatherRelative showBG borderT={false} className="text-light flex items-center justify-end gap-x-2 sm:gap-x-4 px-4 h-10 text-sm sm:text-base"/>
        </div>
    )
}
