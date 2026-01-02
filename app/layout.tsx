import "./globals.css";
import WalletProviderApp from "@/src/provider/WalletProvider";
import { Metadata } from "next";
import { geistSans, geistMono } from "./fonts";

export const metadata: Metadata = {
    title: "Rishi Kant",
    description: "I build systems, not apps",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-darkest tracking-wide`}
            >
                <WalletProviderApp>
                    {children}
                </WalletProviderApp>
            </body>
        </html>
    );
}
