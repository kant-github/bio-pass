"use client";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ThemeProvider } from "next-themes";

const endpoint = "https://api.mainnet-beta.solana.com";
export default function WalletProviderApp({ children }: { children: React.ReactNode }) {
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[]}>
                <WalletModalProvider>
                    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                        {children}
                    </ThemeProvider>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}