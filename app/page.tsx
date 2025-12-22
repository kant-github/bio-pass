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
            <Section motherRelative borderB={false} className={cn("text-light font-bold text-[4rem] h-60 flex items-center justify-center", custom_font.className)} showBG={true}>
                Not a Frontend Engineer.
            </Section>
            <Section className="h-40 flex">
                <div className="aspect-square h-auto w-[21%] border-r border-neutral-800/70 relative">
                    <Image
                        height={60}
                        width={60}
                        src={"/images/indian_flag.png"}
                        alt="Rishi Kant"
                        className="object-cover absolute -top-2.5 left-0 z-50"
                    />
                    <div className="rounded-full border border-neutral-800/70 h-full w-full p-1 overflow-hidden">
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
        </div>
    )
}
