import { JSX } from "react";
import Section from "../components/section";
import Image from "next/image";

const portfolioData = {
    intro: [
        {
            text: "Design Engineer with 5+ years building pixel-perfect interfaces and scalable backend systems."
        },
        {
            text: "Specialized in ",
            highlight: ["WebSockets", "Redis", "Microservices"],
            suffix: " architecture with expertise in real-time communication and distributed systems."
        },
        {
            text: "Full-stack developer proficient in ",
            highlight: ["Next.js", "React", "TypeScript", "Node.js"],
            suffix: " — equally strong in frontend polish and backend infrastructure."
        },
        {
            text: "Currently at ",
            highlight: ["AppX"],
            suffix: " ",
            ycBacked: true,
            rest: ", building production-grade web applications."
        }
    ],
    projects: [
        {
            title: "AI-powered Anchor smart contract development platform",
            name: "Winterfell",
            type: "full-stack",
            github: "https://github.com/bottle-nex/winterfell/",
            bullets: [
                "Created interactive LLM dashboard with real-time reasoning visualization.",
                "Built custom Kubernetes-based E2E environment for isolated Anchor builds.",
                "Engineered parser system to extract and display live LLM thought processes."
            ]
        },
        {
            title: "Blockchain quiz platform with real-time multiplayer",
            name: "Nocturn",
            type: "full-stack",
            github: "https://github.com/celestium-x/nocturn/",
            bullets: [
                "Built WebSocket system with Redis Pub/Sub for horizontally scaled real-time communication.",
                "Designed microservices architecture with orchestrator worker for fault-tolerant question transitions.",
                "Developing smart contracts for on-chain rewards and player trading."
            ]
        },
    ]
};

export default function AboutSection(): JSX.Element {
    const renderIntroText = (item: typeof portfolioData.intro[0], index: number) => {
        if ('highlight' in item && item.highlight) {
            return (
                <div key={index} className="flex text-light text-sm leading-relaxed">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                        {item.text}
                        {item.highlight.map((term, i) => (
                            <span key={i}>
                                <span className="text-light font-medium">{term}</span>
                                {i < item.highlight.length - 1 ? ", " : ""}
                            </span>
                        ))}
                        {item.suffix}
                        {('ycBacked' in item && item.ycBacked) && (
                            <span className="inline-flex items-center align-middle gap-x-0.5 ml-1">
                                <Image
                                    src={"/images/yc.webp"}
                                    width={20}
                                    height={20}
                                    alt="yc"
                                    className="inline-block"
                                />-combinator backed
                            </span>
                        )}
                        {'rest' in item && item.rest}
                    </span>
                </div>
            );
        }
        return (
            <div key={index} className="flex text-light text-sm leading-relaxed">
                <span className="mr-2 shrink-0">•</span>
                <span>{item.text}</span>
            </div>
        );
    };

    return (
        <>
            <Section className="text-light flex items-center text-left gap-x-2 sm:gap-x-4 px-1 text-sm sm:text-3xl font-semibold">
                About
            </Section>
            <Section borderT={false} className="p-4 font-mono">
                <div className="text-light font-mono space-y-4">
                    <div className="space-y-3">
                        {portfolioData.intro.map((item, index) => renderIntroText(item, index))}
                    </div>

                    <div className="mt-8 space-y-6">
                        {portfolioData.projects.map((project, index) => (
                            <div key={index} className="space-y-2">
                                <div className="mb-2">
                                    <h3 className="text-light text-base font-semibold mb-0.5">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                                        <span className="text-light font-medium underline">{project.name}</span>
                                        <span>| {project.type} |</span>
                                        <a
                                            target="_blank"
                                            href={project.github}
                                            className="underline hover:text-light transition-colors"
                                        >
                                            github
                                        </a>
                                    </div>
                                </div>

                                <ul className="space-y-1.5 ml-4">
                                    {project.bullets.map((bullet, bulletIndex) => (
                                        <li key={bulletIndex} className="flex text-light text-xs leading-relaxed">
                                            <span className="mr-2 shrink-0">•</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}