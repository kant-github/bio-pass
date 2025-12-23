import { JSX } from "react";
import Section from "../components/section";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IoIosLink } from "react-icons/io";


interface SocialProfile {
    image: string;
    media: string;
    url: string;
    username: string;
}

export const social_profile: SocialProfile[] = [
    {
        image: "/images/github.webp",
        media: "GitHub",
        url: "https://github.com/kant-github/",
        username: "@kant-github",
    },
    {
        image: "/images/linkedin.webp",
        media: "LinkedIn",
        url: "https://www.linkedin.com/in/kant-linked/",
        username: "kant-linkedin",
    },
    {
        image: "/images/x.webp",
        media: "X (Formally Twitter)",
        url: "https://x.com/khairrishi",
        username: "khairrishi",
    },
    {
        image: "/images/instagram.png",
        media: "Instagram",
        url: "https://www.instagram.com/khairrishi",
        username: "khairrishi",
    }
]

export default function SocialProfile(): JSX.Element {
    return (
        <>
            <Section borderT={false} borderB={false}>
                <div className="w-full grid grid-cols-[48.85%_2.3%_48.85%] gap-y-3 text-light overflow-hidden">
                    <section className="flex flex-col gap-y-4 border-r border-neutral-800/70">
                        {social_profile.slice(0, 2).map((profile, index) => (
                            <div key={index} className={cn("p-4 flex items-center hover:bg-neutral-900 cursor-pointer group",
                                index === 0 ? "border-b border-neutral-800/70" : "",
                                index === 1 ? "border-t border-neutral-800/70" : "",
                            )}>
                                <div className="w-full flex justify-start gap-x-4">
                                    <Image
                                        src={profile.image}
                                        alt={profile.media}
                                        width={40}
                                        height={40}
                                    />
                                    <div className="flex flex-col items-start justify-center">
                                        <span className="group-hover:underline">{profile.media}</span>
                                        <span className="text-light/70 text-xs">{profile.username}</span>
                                    </div>
                                </div>
                                <IoIosLink />
                            </div>
                        ))}
                    </section>
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="w-full h-auto aspect-square border-y border-neutral-800/70" />
                    </div>
                    <section className="flex flex-col gap-y-4 border-l border-neutral-800/70">
                        {social_profile.slice(2, 4).map((profile, index) => (
                            <div key={index} className={cn("p-4 flex items-center justify-start gap-x-2 hover:bg-neutral-900 cursor-pointer group",
                                index === 0 ? "border-b border-neutral-800/70" : "",
                                index === 1 ? "border-t border-neutral-800/70" : "",
                            )}>
                                <div className="w-full flex justify-start gap-x-4">
                                    <Image
                                        src={profile.image}
                                        alt={profile.media}
                                        width={40}
                                        height={40}
                                        className={cn(profile.media === "Instagram" && "invert")}
                                    />
                                    <div className="flex flex-col items-start justify-center">
                                        <span className="group-hover:underline">{profile.media}</span>
                                        <span className="text-light/70 text-xs">{profile.username}</span>
                                    </div>
                                </div>
                                <IoIosLink />
                            </div>
                        ))}
                    </section>
                </div>
            </Section>
            <Section fatherRelative showBG borderB={false} className="text-light flex items-center justify-end gap-x-2 sm:gap-x-4 px-4 h-10 text-sm sm:text-base" />
        </>
    )
}