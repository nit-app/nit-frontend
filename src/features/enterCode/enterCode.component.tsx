import React, { useEffect, useState } from "react";
import { Timer } from "@/shared/ui/timer";
import { Logo } from "@/shared/elements/logo";
import { Form, Input, Typography } from "antd";
import styles from "./style.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { EnterCodeComponentProps } from "./types";
import ru from "@/../public/locales/ru/content.json";

const { Text, Link, Title } = Typography;
export const EnterCodeComponent = ({ link, phone }: EnterCodeComponentProps) => {
    const router = useRouter();
    const { seconds, sendCode, sendAgainPerSeconds, sendAgain, enterCode } = ru?.enterCodeForm?.labels.defaults;
    const [value, setValue] = useState("");
    const [timeStop, setTimeStop] = useState(false);
    useEffect(() => {
        if (value.length === 4) {
            router.push(link);
        }
    }, [value]);
    const getNewLink = () => {
        if (timeStop) {
            return <Link href="#"
                         onClick={() => setTimeStop(!timeStop)}>{sendAgain}</Link>;
        }
        return <Text>{sendAgainPerSeconds}<Timer
            setTimeIsUp={setTimeStop}/> {seconds}</Text>;
    };
    return (
        <div className={styles.container}>
            <Logo/>
            <div className={styles.title}>
                <Title style={{ margin: 0 }} level={3}>{enterCode}</Title>
                <Text className={styles.description}>{sendCode}{phone}</Text>
            </div>
            <Form
                name="enterCodeForm"
                autoComplete="false"
            >
                <Form.Item>
                    <Input placeholder="••••"
                           minLength={4}
                           maxLength={4}
                           onChange={(e) => setValue(e.target.value)}
                           value={value}
                           allowClear={{ clearIcon: <CloseOutlined/> }}
                           type="text"/>
                </Form.Item>
            </Form>
            {getNewLink()}
        </div>
    );
};
