import { cn } from "@/lib/utils";
import Nav from "@/src/components/nav";
import Section from "@/src/components/section";
import TickerIformation from "@/src/base/TickerIformation";
import SocialProfile from "@/src/base/SocialProfile";
import AboutSection from "@/src/base/AboutSection";
import { custom_font } from "./layout";
import GithubSection from "@/src/base/GithubSection";
import StackSetion from "@/src/base/StacksSection";
import MyWorkSection from "@/src/base/MyWorkSection";
import HeadlinesSection from "@/src/base/HeadlinesSection";

export default function Home() {

    return (
        <div className="flex flex-col bg-darkest w-full max-w-full overflow-x-hidden">
            <Section borderT={false} className="h-2" borderX={false} borderB={false} isFirst />
            <Nav />
            <Section bgType="dots" motherRelative borderB={false} className={cn("text-light font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] h-48 sm:h-56 md:h-60 flex items-center justify-center text-center px-4", custom_font.className)} showBG={true}>
                Need an Engineer ?
            </Section>
            <HeadlinesSection/>
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
