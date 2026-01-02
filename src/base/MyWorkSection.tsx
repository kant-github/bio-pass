"use client";
import { JSX, useState } from "react";
import Section from "../components/section";
import { FaCode, FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { IconWrapper } from "./TickerIformation";
import Link from "next/link";
import { RiContractUpDownLine } from "react-icons/ri";
import { BsChevronExpand } from "react-icons/bs";

interface Project {
    name: string;
    tagline: string;
    description: string;
    type: string;
    github: string;
    toughParts: string[];
    easyParts: string[];
    technologies: string[];
}

const projects: Project[] = [
    {
        name: "Nocturn",
        tagline: "The quiz application but with pump.fun energy",
        description: "A blockchain-powered quiz platform that combines gamification with on-chain rewards. Players can participate in real-time quizzes, earn rewards, and trade them securely on the blockchain.",
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
        ],
        technologies: ["React", "Next.js", "WebSocket", "Redis", "Pub-Subs", "Solana", "Anchor", "TypeScript", "Tailwind CSS"]
    },
    {
        name: "Winterfell",
        tagline: "Lovable for Anchor smart contracts",
        description: "An AI-powered development tool that helps developers build, deploy, and test Anchor smart contracts. Features live reasoning visualization and secure containerized execution environments.",
        type: "full-stack application",
        github: "https://github.com/bottle-nex/winterfell/",
        toughParts: [
            "Developed a parser and extractor system to display the LLM's live reasoning process in an intuitive UI.",
            "Designed a custom Kubernetes-based E2E environment to securely run Anchor build, deploy, and test commands in isolated containers."
        ],
        easyParts: [
            "Built an interactive dashboard for sending prompts to an LLM backend and visualizing real-time responses.",
            "Created a futuristic landing and playground interface, combining high-performance React components with modern design."
        ],
        technologies: ["React", "Next.js", "Kubernetes", "Docker", "Anchor", "Solana", "AI/LLM", "TypeScript", "NGINX", "CI/CD", "Tailwind CSS", "S3", "CloudFront", "EC2", "Web-Sockets"]
    }
];

function ProjectCard({ project }: { project: Project }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="relative flex gap-4 sm:gap-6">
            <div className="flex flex-col items-center shrink-0">
                <IconWrapper icon={<FaRegCalendar />} />
                <div
                    className="w-0.5 bg-border transition-all duration-500 ease-in-out"
                    style={{ minHeight: isExpanded ? '450px' : '80px' }}
                />
                <div
                    className="transition-opacity duration-500 ease-in-out"
                    style={{
                    }}
                >
                    <IconWrapper icon={<FaCode />} />
                </div>
            </div>

            <div className="flex-1 pb-8 sm:pb-10">
                <div onClick={() => setIsExpanded(!isExpanded)} className="mb-4 px-3 py-2 rounded-sm relative hover:bg-dark/40 cursor-pointer">
                    <div className="flex items-center gap-2 text-sm text-light/70 hover:text-light transition-colors group absolute top-3 right-3">
                        {isExpanded ? (
                            <RiContractUpDownLine className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                        ) : (
                            <BsChevronExpand className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                        )}
                    </div>
                    <div className="flex flex-col items-start gap-2 flex-wrap">
                        <div className="flex items-center justify-start gap-x-3">
                            <h3 className="text-light text-lg sm:text-xl font-bold">
                                {project.name}
                            </h3>

                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-light/70 hover:text-light transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <FaGithub className="w-4 h-4" />
                            </Link>
                        </div>
                        <span className="text-light/80 text-xs px-2 py-0.5 border border-light/30 rounded">
                            {project.type}
                        </span>
                    </div>
                    <p className="text-light/60 text-xs sm:text-sm mt-1 font-light">
                        {project.tagline}
                    </p>
                </div>

                <div className="mb-4">
                    <p className="text-light/80 text-sm sm:text-base leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                        maxHeight: isExpanded ? '1000px' : '0',
                        opacity: isExpanded ? 1 : 0
                    }}
                >
                    <div className="mt-6 space-y-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-semibold text-light/50 uppercase tracking-wider">
                                    Built
                                </span>
                            </div>
                            <ul className="space-y-2">
                                {project.easyParts.map((bullet, bulletIndex) => (
                                    <li key={bulletIndex} className="flex text-light text-xs sm:text-sm leading-relaxed">
                                        <span className="mr-2 shrink-0">•</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-semibold text-light/50 uppercase tracking-wider">
                                    Challenging (but overcame)
                                </span>
                            </div>
                            <ul className="space-y-2">
                                {project.toughParts.map((bullet, bulletIndex) => (
                                    <li key={bulletIndex} className="flex text-light text-xs sm:text-sm leading-relaxed">
                                        <span className="mr-2 shrink-0 ">•</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-light/60 uppercase tracking-wider">
                            Technologies Used
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="text-xs px-3 py-1 bg-light/5 border border-light/20 rounded-sm text-light/70 hover:bg-light/10 hover:border-light/30 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function MyWorkSection(): JSX.Element {
    return (
        <>
            <Section className="text-light flex items-center text-left gap-x-2 sm:gap-x-4 px-4 py-3 text-sm sm:text-3xl font-semibold">
                My Work
            </Section>
            <div className="relative">
                {projects.map((project, index) => (
                    <Section key={index} motherRelative borderT={false} className="p-4 sm:p-6 font-mono">
                        <ProjectCard project={project} />
                    </Section>
                ))}
            </div>
        </>
    );
}