"use client";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

const endpoint = "https://api.mainnet-beta.solana.com";
export default function WalletProviderApp({ children }: { children: React.ReactNode }) {
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[]}>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}