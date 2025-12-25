import { JSX } from "react";
import Section from "../components/section";
import { FaGithub } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";

interface Project {
    name: string;
    tagline: string;
    type: string;
    github: string;
    toughParts: string[];
    easyParts: string[];
}

const projects: Project[] = [
    {
        name: "Nocturn",
        tagline: "The quiz application but with pump.fun energy",
        type: "full-stack application",
        github: "https://github.com/celestium-x/nocturn/",
        toughParts: [
            "Developed a WebSocket system with Redis Pub/Sub for horizontally scaled real-time communication between hosts, participants, and spectators.",
            "Designed a microservices-based architecture with an orchestrator worker to handle question transitions and ensure fault tolerance.",
            "Currently developing smart contracts enabling players to earn and trade rewards securely on-chain."
        ],
        easyParts: [
            "Building a blockchain-powered quiz platform inspired by pump.fun, combining gamification with on-chain rewards.",
            "Built clean, user-friendly UI pages optimized for fast gameplay and smooth interactions."
        ]
    },
    {
        name: "Winterfell",
        tagline: "Lovable for Anchor smart contracts",
        type: "full-stack application",
        github: "https://github.com/bottle-nex/winterfell/",
        toughParts: [
            "Developed a parser and extractor system to display the LLM's live reasoning process in an intuitive UI.",
            "Designed a custom Kubernetes-based E2B environment to securely run Anchor build, deploy, and test commands in isolated containers."
        ],
        easyParts: [
            "Built an interactive dashboard for sending prompts to an LLM backend and visualizing real-time responses.",
            "Created a futuristic landing and playground interface, combining high-performance React components with modern design."
        ]
    }
];

export default function MyWorkSection(): JSX.Element {
    return (
        <>
            <Section className="text-light flex items-center text-left gap-x-2 sm:gap-x-4 px-4 py-3 text-sm sm:text-3xl font-semibold">
                My Work
            </Section>
            <Section motherRelative showBG borderT={false} className="p-4 sm:p-6 font-mono">
                <div className="relative flex flex-col gap-y-4">
                    {projects.map((project, index) => (
                        <div key={index} className="relative flex gap-4 sm:gap-6">
                            <div className="flex flex-col items-center shrink-0">
                                <FaRegCalendar className="w-10 h-10 p-1 rounded-sm bg-dark text-light/70 border-2 border-neutral-700" />
                            
                                <div className="w-0.5 bg-neutral-700 flex-1 min-h-[100px]" />

                                <div className="w-2 h-2 rounded-full bg-neutral-600 z-10" />
                            </div>

                            <div className="flex-1 pb-8 sm:pb-10">
                                <div className="mb-4">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="text-light text-lg sm:text-xl font-bold">
                                            {project.name}
                                        </h3>
                                        <span className="text-neutral-500 text-xs px-2 py-0.5 border border-neutral-700 rounded">
                                            {project.type}
                                        </span>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-neutral-400 hover:text-light transition-colors"
                                        >
                                            <FaGithub className="w-4 h-4" />
                                        </a>
                                    </div>
                                    <p className="text-neutral-400 text-xs sm:text-sm mt-1 italic">
                                        {project.tagline}
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-semibold text-emerald-400/80 uppercase tracking-wider">
                                            ✓ Built
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {project.easyParts.map((bullet, bulletIndex) => (
                                            <li key={bulletIndex} className="flex text-light text-xs sm:text-sm leading-relaxed">
                                                <span className="mr-2 shrink-0 text-emerald-400/60">▸</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-semibold text-orange-400/80 uppercase tracking-wider">
                                            ⚡ Challenging (but overcame)
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {project.toughParts.map((bullet, bulletIndex) => (
                                            <li key={bulletIndex} className="flex text-light text-xs sm:text-sm leading-relaxed">
                                                <span className="mr-2 shrink-0 text-orange-400/60">▸</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
