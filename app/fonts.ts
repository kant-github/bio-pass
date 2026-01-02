import { Press_Start_2P, Geist, Geist_Mono } from "next/font/google";

export const custom_font = Press_Start_2P({
    weight: ["400"],
});

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
