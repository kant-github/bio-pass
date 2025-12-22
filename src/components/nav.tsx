import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Section from "./section";

interface NavItem {
    label?: string;
    href?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}

export default function Nav() {

    const nav_items: NavItem[] = [
        {
            label: "Portfolio",
        },
        {
            icon: <FaGithub />,
        }
    ]

    return (
        <Section borderB={false} className="text-light flex items-center justify-end gap-x-4 px-8 py-3">
            {nav_items.map((item, index) => (
                <div className="flex items-center justify-center gap-x-2 cursor-pointer" key={index}>
                    {item.icon && (
                        <div className="hover:bg-dark h-8 w-8 flex items-center justify-center rounded-1">
                            {item.icon}
                        </div>
                    )}
                    {item.label}
                </div>
            ))}
        </Section>
    )
}