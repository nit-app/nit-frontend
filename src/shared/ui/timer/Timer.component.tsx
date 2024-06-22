import { useEffect, useState } from "react";
import { TimerComponentProps } from "./types";
import { Typography } from "@/shared/ui/typography";

const { Text } = Typography;

export const Timer = ({ setTimeIsUp, setCurrentCount }: TimerComponentProps) => {
    const [time, setTime] = useState(60);
    const [isCounting, setCounting] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            if (isCounting) {
                setTime(time >= 1 ? time - 1 : 0);
                setCurrentCount(time >= 1 ? time - 1 : 0);
            }
        }, 1000);
        if (time === 0) {
            setCounting(false);
            setTimeIsUp(true);
        }
        return () => {
            clearInterval(interval);
        };
    }, [time, isCounting]);


    return <Text>{time}</Text>;
};