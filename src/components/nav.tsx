"use client";
import { FaGithub } from "react-icons/fa";
import Section from "./section";
import { AnimatedThemeToggler } from "@/src/ui/animated-theme-toggler";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { custom_font } from "@/app/layout";
import { AnimatePresence, motion } from "framer-motion";
import { IconWrapper } from "../base/TickerIformation";
import { TiCoffee } from "react-icons/ti";

interface NavProps {
    walletModalOpen: boolean;
    setWalletModalOpen: (open: boolean) => void;
}

export default function Nav({ setWalletModalOpen }: NavProps) {
    const [visible, setVisible] = useState<boolean>(true);
    const [scrollY, setScrollY] = useState<number>(0);

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
                <div className="flex items-center justify-center gap-x-1 sm:gap-x-2 cursor-pointer">
                    <IconWrapper icon={<FaGithub />} />
                </div>
                <AnimatedThemeToggler className="h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-md cursor-pointer transition-colors [&_svg]:size-4" />
            </div>
        </Section>
    )
}