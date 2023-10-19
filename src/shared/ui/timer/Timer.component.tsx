import { useEffect, useState } from "react";
import { Typography } from "antd";
import { TimerComponentProps } from "./types";

const { Text } = Typography;

export const Timer = ({ setTimeIsUp }: TimerComponentProps) => {
    const [time, setTime_] = useState(60);
    const [isCounting, setCounting] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            isCounting && setTime_(time >= 1 ? time - 1 : 0);
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