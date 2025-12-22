import type { Metadata } from "next";
import { Iceland } from "next/font/google";
import "./globals.css";

export const custom_font = Iceland({
    weight: ["400"],
})

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
                className={`bg-darkest`}
            >
                {children}
            </body>
        </html>
    );
}
