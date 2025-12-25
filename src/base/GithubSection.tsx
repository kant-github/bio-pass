
"use client";

import { JSX } from "react";
import dynamic from "next/dynamic";
import Section from "../components/section";

const GitHubCalendar = dynamic(
    () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
    { ssr: false }
);

export default function GithubSection(): JSX.Element {
    return (
        <>
            <Section className="h-full">
                <div className="w-full overflow-x-auto p-4">
                    <GitHubCalendar
                        username="kant-github"
                        year="last"
                        blockSize={12}
                        blockMargin={4}
                        blockRadius={2}
                        fontSize={14}
                        colorScheme="dark"
                        theme={{
                            dark: ['#101013', '#27272a', '#45454a', '#626269', '#818189'],
                        }}
                        labels={{
                            totalCount: '{{count}} contributions in the last year',
                        }}
                        style={{
                            color: '#9ca3af',
                        }}
                    />
                </div>
            </Section>
            <Section fatherRelative showBG borderB={false} className="text-light flex items-center justify-end gap-x-2 sm:gap-x-4 px-4 h-10 text-sm sm:text-base" />
        </>
    )
}