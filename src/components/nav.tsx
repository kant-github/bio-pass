"use client";

import { FaGithub } from "react-icons/fa";
import Section from "./section";
import { AnimatedThemeToggler } from "@/src/ui/animated-theme-toggler";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { custom_font } from "@/app/layout";
import { AnimatePresence, motion } from "framer-motion";

interface NavItem {
    label?: string;
    href?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}

export default function Nav() {
    const [visible, setVisible] = useState<boolean>(true);
    const [scrollY, setScrollY] = useState<number>(0);

    const nav_items: NavItem[] = [
        {
            label: "Portfolio",
        },
        {
            icon: <FaGithub />,
        }
    ]

    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;
            console.log("currentScrollY:", currentScrollY, "previousScrollY:", scrollY);
            if (currentScrollY >= 100) {
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
            <div className="flex items-center justify-center py-2 sm:py-3 ">
                {nav_items.map((item, index) => (
                    <div className="flex items-center justify-center gap-x-1 sm:gap-x-2 cursor-pointer" key={index}>
                        {item.icon && (
                            <div className="hover:bg-hover h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-md">
                                {item.icon}
                            </div>
                        )}
                        {item.label}
                    </div>
                ))}
                <AnimatedThemeToggler className="hover:bg-hover h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-md cursor-pointer transition-colors [&_svg]:size-4" />
            </div>
        </Section>
    )
}