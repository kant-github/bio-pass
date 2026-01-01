"use client";

import { useState, useEffect } from "react";

const IST_OFFSET_MINUTES = 330; // UTC+5:30 in minutes

interface LocalTimeResult {
    time: string;
    difference: string;
}

export function useLocalTime(): LocalTimeResult {
    const [timeData, setTimeData] = useState<LocalTimeResult>({
        time: "",
        difference: "",
    });

    useEffect(() => {
        const calculateTime = () => {
            const now = new Date();

            // Get IST time
            const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
            const istDate = new Date(utcMs + IST_OFFSET_MINUTES * 60000);

            const hours = istDate.getHours().toString().padStart(2, "0");
            const minutes = istDate.getMinutes().toString().padStart(2, "0");
            const time = `${hours}:${minutes}`;

            // Calculate difference from viewer's timezone
            const viewerOffsetMinutes = -now.getTimezoneOffset(); // getTimezoneOffset returns opposite sign
            const diffMinutes = IST_OFFSET_MINUTES - viewerOffsetMinutes;

            let difference: string;
            if (diffMinutes === 0) {
                difference = "";
            } else {
                const absDiff = Math.abs(diffMinutes);
                const diffHours = Math.floor(absDiff / 60);
                const diffMins = absDiff % 60;

                let diffStr = "";
                if (diffHours > 0) {
                    diffStr += `${diffHours}h`;
                }
                if (diffMins > 0) {
                    diffStr += `${diffHours > 0 ? " " : ""}${diffMins}m`;
                }

                difference = diffMinutes > 0 ? `${diffStr} ahead` : `${diffStr} behind`;
            }

            setTimeData({ time, difference });
        };

        calculateTime();
        const interval = setInterval(calculateTime, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    return timeData;
}
