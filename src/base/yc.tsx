import { JSX } from "react";

export default function YcombinatorBadge(): JSX.Element {
    return (
        <div className="flex items-center justify-center gap-x-1">
            <span className="bg-orange-500 text-white h-5 w-5 flex items-center justify-center rounded-[2px] font-semibold">Y</span>
            <span>combinator</span>
        </div>
    )
}