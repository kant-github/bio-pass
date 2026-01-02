import { JSX } from "react";
import Section from "../components/section";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletName } from "@solana/wallet-adapter-base";
import Image from "next/image";
import { IconWrapper } from "./TickerIformation";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";

interface WalletModalProps {
    open: boolean;
    onClose: () => void;
}

export default function WalletModalV2({ open, onClose }: WalletModalProps): JSX.Element | null {
    const { wallets, select, connected, publicKey, disconnect } = useWallet();
    if (!open) return null;

    function handleWalletSelect(walletName: WalletName) {
        try {
            select(walletName);
        } catch (error) {
            console.error("Failed to connect wallet:", error);
        }
    };

    return (
        <>
            <Section borderT={false} className="text-light flex items-center justify-between text-left gap-x-2 sm:gap-x-4 px-1 text-sm sm:text-3xl font-semibold">
                <span>Wallets</span>
                <X onClick={() => onClose()} size={20} className="cursor-pointer" />
            </Section>
            <Section borderT={false}>
                {connected && publicKey ? (
                    <div className="space-y-4">
                        <div className="p-3 rounded-md bg-darkest border border-border">
                            <p className="text-xs text-light/60 mb-1">Connected Address</p>
                            <p className="text-sm text-light font-mono truncate">
                                {publicKey.toBase58()}
                            </p>
                        </div>
                        <p className="text-sm text-light/80 text-center">
                            Send SOL to support me! ☕
                        </p>
                        <button
                            type="button"
                            onClick={() => disconnect()}
                            className="w-full py-2 px-4 rounded-md bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-colors text-sm"
                        >
                            Disconnect
                        </button>
                    </div>
                ) : (
                    <div className="">
                        {wallets.length === 0 ? (
                            <p className="text-sm text-light/60 text-center">
                                No wallets detected. Install a Solana wallet like Phantom or Solflare.
                            </p>
                        ) : (
                            wallets.map((wallet, idx) => (
                                <div
                                    key={wallet.adapter.name}
                                    onClick={() => handleWalletSelect(wallet.adapter.name as WalletName)}
                                    className={cn("w-full flex items-center transition-colors border-b h-20 hover:bg-light/5 cursor-pointer",
                                        idx === wallets.length - 1 ? "border-b-0" : "border-border",
                                    )}
                                >
                                    <div className="border-r flex items-center justify-start p-2 h-full">
                                        <IconWrapper icon={<Image
                                            src={wallet.adapter.icon}
                                            alt={wallet.adapter.name}
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                        />} />
                                    </div>
                                    <span className="text-sm text-light px-4">
                                        {wallet.adapter.name}
                                    </span>
                                    {wallet.readyState === "Installed" && (
                                        <span className="ml-auto text-xs text-light px-4 flex items-center justify-end gap-x-3">
                                            <GoArrowUpRight className="text-light" />
                                        </span>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                )}
            </Section>
        </>
    )
}