import type { Metadata } from "next";
import { Geostar_Fill, Iceland } from "next/font/google";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

export const custom_font = Geostar_Fill({
    weight: ["400"],
})
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Rshi Kant",
    description: "I build systems, not just websites.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-darkest tracking-wide`}
            >
                {children}
            </body>
        </html>
    );
}
