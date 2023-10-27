import React, { useEffect, useState } from "react";
import { Timer } from "@/shared/ui/timer";
import { Logo } from "@/shared/elements/logo";
import styles from "./style.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { EnterCodeComponentProps } from "./types";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Typography } from "@/shared/ui/typography";
import { Namespace, useTranslation } from "@/shared/translation";
import { declensions } from "@/shared/hooks";

const { Text, Link, Title } = Typography;


const NewLinkTimer = () => {
    const [timeLeft, setTimeLeft] = useState(60);
    const [timeStop, setTimeStop] = useState(false);
    const { t } = useTranslation(Namespace.content);
    const getSecondDeclension = declensions.useSecondDeclension();
    if (timeStop) {
        return (
            <Link
                href="#"
                onClick={() => setTimeStop(!timeStop)}>
                {t("enterCodeForm:labels:defaults:sendAgain")}
            </Link>
        );
    }

    return (
        <Text>
            {t("enterCodeForm:labels:defaults:sendAgainPerSeconds")}
            <Timer setTimeIsUp={setTimeStop} setCurrentCount={setTimeLeft}/> {getSecondDeclension(timeLeft)}
        </Text>);
};

export const EnterCodeComponent = ({ link, phone }: EnterCodeComponentProps) => {
    const router = useRouter();
    const { t } = useTranslation(Namespace.content);
    const [value, setValue] = useState("");

    useEffect(() => {
        if (value.length === 4) {
            router.push(link);
        }
    }, [value]);


    return (
        <div className={styles.container}>
            <Logo/>
            <div className={styles.title}>
                <Title style={{ margin: 0 }} level={3}>{t("enterCodeForm:labels:defaults:enterCode")}</Title>
                <Text className={styles.description}>{t("enterCodeForm:labels:defaults:sendCode")}{phone}</Text>
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
            <NewLinkTimer/>
        </div>
    );
};
