import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import WalletProviderApp from "@/src/provider/WalletProvider";

export const custom_font = Press_Start_2P({
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
                    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                        {children}
                    </ThemeProvider>
                </WalletProviderApp>
            </body>
        </html>
    );
}
