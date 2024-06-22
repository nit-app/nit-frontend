import React, { useState } from "react";
import { Timer } from "@/shared/ui/timer";
import { Logo } from "@/shared/elements/logo";
import styles from "./style.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Typography } from "@/shared/ui/typography";
import { Namespace, useTranslation } from "@/shared/translation";
import { declensions, useMutationFromKey } from "@/shared/hooks";

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
            {t("enterCodeForm:labels:defaults:sendAgainPerSeconds")} <Timer setTimeIsUp={setTimeStop}
                                                                            setCurrentCount={setTimeLeft}/> {getSecondDeclension(timeLeft)}
        </Text>);
};

interface EnterCodeBasicComponentProps {
    onSubmit: (code: string) => Promise<void>;
    path: string;
    loading?: boolean;
}

export const EnterCodeBasicComponent = ({ onSubmit, path, loading = false }: EnterCodeBasicComponentProps) => {
    const { t } = useTranslation(Namespace.content);
    const { mutateState } = useMutationFromKey(["sendCode", path]);
    const onSubmitInner = async (code: string) => {
        if (loading) return;
        await onSubmit(code);
    };
    return (
        <div className={styles.container}>
            <Logo/>
            <div className={styles.title}>
                <Title style={{ margin: 0 }} level={3}>{t("enterCodeForm:labels:defaults:enterCode")}</Title>
                <Text
                    className={styles.description}>{t("enterCodeForm:labels:defaults:sendCode", { phone: mutateState?.variables })}</Text>
            </div>
            <Form
                name="enterCodeForm"
                autoComplete="false"
            >
                <Form.Item
                    name="enterCode"
                    rules={[{ required: true, message: "" }, () => ({
                        validator(_, value) {
                            if (value.length === 4) {
                                return onSubmitInner(value)
                                    .then(() => Promise.resolve())
                                    .catch(Promise.reject);
                            }
                            return Promise.reject(new Error(t("forms:labels:defaults:pleaseEnterCode")));
                        },
                    })]}
                >
                    <Input placeholder="••••"
                           minLength={4}
                           maxLength={4}
                           allowClear={{ clearIcon: <CloseOutlined/> }}
                           type="text"/>
                </Form.Item>
            </Form>
            <NewLinkTimer/>
        </div>
    );
};
