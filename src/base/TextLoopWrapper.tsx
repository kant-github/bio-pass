import { JSX } from "react";
import { TextLoop } from "../ui/text-loop";
import { cn } from "@/lib/utils";

interface TextLoopWrapperProps {
    slugs: string[];
    className?: string
}

export default function TextLoopWrapper({ slugs, className }: TextLoopWrapperProps): JSX.Element {
    return (
        <TextLoop interval={3} className='font-mono text-sm'>
            {slugs.map((slug, index) => (
                <span className={cn(className)} key={index}>{slug}</span>
            ))}
        </TextLoop>
    )
}