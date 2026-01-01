import { JSX } from "react";
import Image from "next/image";
import Section from "../components/section";

interface Stack {
    name: string;
    icon: JSX.Element;
    url: string;
}

export const stacks: Stack[] = [
    {
        name: "TypeScript",
        icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width={48} height={48} className="w-8 h-8 sm:w-12 sm:h-12" />,
        url: "https://www.typescriptlang.org"
    },
    {
        name: "Node.js",
        icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width={48} height={48} className="w-8 h-8 sm:w-12 sm:h-12" />,
        url: "https://nodejs.org"
    },
    {
        name: "Socket.IO",
        icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" alt="Socket.IO" width={48} height={48} className="w-8 h-8 sm:w-12 sm:h-12 dark:invert" />,
        url: "https://socket.io"
    },
    {
        name: "Redis",
        icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" width={48} height={48} className="w-8 h-8 sm:w-12 sm:h-12" />,
        url: "https://redis.io"
    },
    {
        name: "Kafka",
        icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" alt="Kafka" width={48} height={48} className="w-8 h-8 sm:w-12 sm:h-12 dark:invert" />,
        url: "https://kafka.apache.org"
    },
    {
        name: "Docker",
        icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width={48} height={48} className="w-8 h-8 sm:w-12 sm:h-12" />,
        url: "https://www.docker.com"
    },
    {
        name: "Git",
        icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width={48} height={48} className="w-8 h-8 sm:w-12 sm:h-12" />,
        url: "https://git-scm.com"
    },
    {
        name: "GitHub",
        icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 dark:invert" />,
        url: "https://github.com"
    },
    {
        name: "Next.js",
        icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" width={48} height={48} className="w-8 h-8 sm:w-12 sm:h-12 dark:invert" />,
        url: "https://nextjs.org"
    },
    {
        name: "React",
        icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={48} height={48} className="w-8 h-8 sm:w-12 sm:h-12" />,
        url: "https://react.dev"
    },
    {
        name: "GitHub Actions",
        icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" alt="GitHub Actions" width={48} height={48} className="w-8 h-8 sm:w-12 sm:h-12" />,
        url: "https://github.com/features/actions"
    },
    {
        name: "PostgreSQL",
        icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width={48} height={48} className="w-8 h-8 sm:w-12 sm:h-12" />,
        url: "https://www.postgresql.org"
    },
    {
        name: "Prisma",
        icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" alt="Prisma" width={48} height={48} className="w-8 h-8 sm:w-12 sm:h-12 dark:invert" />,
        url: "https://www.prisma.io"
    },
    {
        name: "Turborepo",
        icon: <Image src="https://logo.svgcdn.com/logos/turborepo.svg" alt="Turborepo" width={48} height={48} className="w-8 h-8 sm:w-12 sm:h-12 dark:invert" />,
        url: "https://turbo.build"
    },
    {
        name: "Amazon Web Services",
        icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width={48} height={48} className="w-8 h-8 sm:w-12 sm:h-12" />,
        url: "https://aws.amazon.com"
    }
];

export default function StackSection(): JSX.Element {
    return (
        <>
            <Section className="text-light flex items-center text-left gap-x-2 sm:gap-x-4 px-4 py-3 text-sm sm:text-3xl font-semibold">
                Stack
            </Section>
            <Section motherRelative showBG borderT={false} className="p-3 sm:p-4 font-mono">
                <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-y-1 sm:gap-3">
                    {stacks.map((stack, index) => (
                        <a
                            key={index}
                            href={stack.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center group cursor-pointer transition-transform hover:scale-105"
                            title={stack.name}
                        >
                            <div className="aspect-square p-1.5 sm:p-2 rounded-md transition-all flex items-center justify-center">
                                {stack.icon}
                            </div>
                        </a>
                    ))}
                </div>
            </Section>
        </>
    );
}