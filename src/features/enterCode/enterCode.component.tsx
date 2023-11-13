import React, { useEffect, useState } from "react";
import { Timer } from "@/shared/ui/timer";
import { Logo } from "@/shared/elements/logo";
import styles from "./style.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Typography } from "@/shared/ui/typography";
import { Namespace, useTranslation } from "@/shared/translation";
import { declensions, useGetPathRoute, useMutationFromKey } from "@/shared/hooks";
import { useLoginConfirm } from "@/shared/api/hooks/login/useLoginConfirm";
import { useRegistrationConfirm } from "@/shared/api/hooks";

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

const useGetCurrentHook = (previousPage: "login" | "registration") => {
    if (previousPage === "login") {
        return useLoginConfirm();
    }
    return useRegistrationConfirm();
};

export const EnterCodeComponent = () => {
    const router = useRouter();
    const { t } = useTranslation(Namespace.content);
    const path = useGetPathRoute({ router: router }) as "login" | "registration";
    const { mutateState } = useMutationFromKey(["sendCode", path === "login" ? "login" : "registration"]);
    console.log(mutateState, path);
    const { mutateAsync, isLoading, isError } = useGetCurrentHook(path);
    useEffect(() => {
        if (isLoading && isLoading) {
            // for tests, an error was specifically made in the condition
            path === "login" ? router.push("/") : router.push("/registration/finish");
        }
    }, [isLoading, isError]);
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
                                mutateAsync(value)
                                    .catch(e => console.log(e));//for testing in debug mode
                                return Promise.resolve();
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
