import React, { useEffect, useState } from "react";
import { Timer } from "@/shared/ui/timer";
import { Logo } from "@/shared/elements/logo";
import { Form, Input, Typography } from "antd";
import styles from "./style.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { EnterCodeComponentProps } from "./types";

const { Text, Link, Title } = Typography;
export const EnterCodeComponent = ({ link, phone }: EnterCodeComponentProps) => {
    const router = useRouter();
    const [value, setValue] = useState("");
    const [timeStop, setTimeStop] = useState(false);
    useEffect(() => {
        if (value.length === 4) {
            router.push(link);
        }
    }, [value]);
    const getNewLink = () => {
        if (timeStop) {
            return <Link href="#" onClick={() => setTimeStop(!timeStop)}>Отправить ещё раз</Link>;
        }
        return <Text>Отправим код повторно через <Timer setTimeIsUp={setTimeStop}/> секунд</Text>;
    };
    return (
        <div className={styles.container}>
            <Logo/>
            <div className={styles.title}>
                <Title style={{ margin: 0 }} level={3}>Введите код</Title>
                <Text className={styles.description}>Отправили код подтверждения
                    на номер {phone}</Text>
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
