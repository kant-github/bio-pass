"use client";
import { FaGithub } from "react-icons/fa";
import Section from "./section";
import { AnimatedThemeToggler } from "@/src/ui/animated-theme-toggler";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { IconWrapper } from "../base/TickerIformation";
import { TiCoffee } from "react-icons/ti";
import { custom_font } from "@/app/fonts";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { TbTicTac } from "react-icons/tb";

interface NavProps {
    walletModalOpen: boolean;
    setWalletModalOpen: (open: boolean) => void;
}

export default function Nav({ setWalletModalOpen }: NavProps) {
    const [visible, setVisible] = useState<boolean>(true);
    const [scrollY, setScrollY] = useState<number>(0);
    const [contributions, setContributions] = useState<number | null>(null);

    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;

            if (currentScrollY >= 80) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            setScrollY(currentScrollY);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]);

    useEffect(() => {
        async function fetchContributions() {
            try {
                const response = await fetch("https://github-contributions-api.jogruber.de/v4/kant-github?y=last");
                const data = await response.json();
                setContributions(data.total?.lastYear ?? data.total?.["2024"] ?? null);
            } catch {
                setContributions(null);
            }
        }
        fetchContributions();
    }, []);

    return (
        <Section sticky={true} className={cn("text-light flex items-center gap-x-2 sm:gap-x-4 text-sm sm:text-base px-4 sm:px-6 md:px-8 ",
            visible ? "justify-end" : "justify-between"
        )}>
            <AnimatePresence mode="popLayout">
                {!visible && (
                    <motion.span
                        key="rk-logo"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className={cn(custom_font.className, "text-[2.3rem]")}
                    >
                        RK
                    </motion.span>
                )}
            </AnimatePresence>
            <div className="flex items-center justify-center gap-x-3 py-2 sm:py-3 ">
                <Tooltip>
                    <TooltipTrigger className="mt-1" asChild>
                        <div>
                            <IconWrapper icon={<TbTicTac className="cursor-pointer" />} />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        Play Tic Tac Toe
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div
                            onClick={() => setWalletModalOpen(true)}
                            className="flex items-center justify-center gap-x-2 cursor-pointer h-6 text-light/40 bg-dark rounded-md border border-border outline outline-offset-1 overflow-hidden aspect-square md:aspect-auto md:px-2"
                        >
                            <TiCoffee className="shrink-0" />
                            <span
                                className="text-xs whitespace-nowrap hidden md:block"
                            >
                                buy me a coffee
                            </span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        Support my work with SOL
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <a
                            href="https://github.com/kant-github"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub Profile"
                            className="flex items-center justify-center gap-x-1 sm:gap-x-2 cursor-pointer"
                        >
                            <IconWrapper icon={<FaGithub />} />
                        </a>
                    </TooltipTrigger>
                    <TooltipContent>
                        {contributions !== null
                            ? `${contributions.toLocaleString()} contributions this year`
                            : "View my GitHub"}
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div>
                            <AnimatedThemeToggler className="h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-md cursor-pointer transition-colors [&_svg]:size-4" />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        Toggle theme
                    </TooltipContent>
                </Tooltip>
            </div>
        </Section>
    )
}