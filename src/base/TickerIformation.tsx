import { JSX } from "react";
import Section from "../components/section";
import { FaCode } from "react-icons/fa6";
import { PiLightbulbDuotone } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdWebStories } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { PiGenderIntersexBold } from "react-icons/pi";

export default function TickerInformation(): JSX.Element {
    return (
        <Section borderT={false} className="tracking-wider">
            <div className="flex items-center gap-2 text-light text-sm p-4">
                <IconWrapper icon={<FaCode />} />
                <span>Senior Frontend Developer & UI Design Lead @Simplamo</span>
            </div>
            <div className="flex items-center gap-2 text-light text-sm px-4">
                <IconWrapper icon={<PiLightbulbDuotone />} />
                <span>Founder @Winterfell</span>
            </div>
            <div className="w-full grid grid-cols-2">
                <section className="space-y-5 p-4">
                    <div className="flex items-center gap-2 text-light text-sm">
                        <IconWrapper icon={<MdOutlineLocationOn />} />
                        <span>100xSchool, Greater Noida, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-light text-sm">
                        <IconWrapper icon={<FiPhone />} />
                        <span>+91 886394 9424</span>
                    </div>
                    <div className="flex items-center gap-2 text-light text-sm">
                        <IconWrapper icon={<MdWebStories />} />
                        <span>krishikant.com</span>
                    </div>
                </section>
                <section className="space-y-5 p-4">
                    <div className="flex items-center gap-2 text-light text-sm">
                        <IconWrapper icon={<MdOutlineAccessTime />} />
                        <span>18:48 // 1h ahead</span>
                    </div>
                    <div className="flex items-center gap-2 text-light text-sm">
                        <IconWrapper icon={<MdOutlineEmail />} />
                        <span>kantrishi7779@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-light text-sm">
                        <IconWrapper icon={<PiGenderIntersexBold />} />
                        <span>he/him</span>
                    </div>
                </section>
            </div>
        </Section>
    )
}

interface IconWrapperProps {
    icon: JSX.Element;
}

export function IconWrapper({ icon }: IconWrapperProps) {
    return (
        <span className="h-6 w-6 inline-flex items-center justify-center text-light/40 bg-dark rounded-md border border-light/10 outline outline-offset-1">
            {icon}
        </span>
    )
}