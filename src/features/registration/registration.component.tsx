import React from "react";
import { useRouter } from "next/router";
import { useMask } from "@/shared/hooks";
import styles from "@/features/login/style.module.scss";
import { Logo } from "@/shared/elements/logo";
import { CloseOutlined } from "@ant-design/icons";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";
import { Namespace, useTranslation } from "@/shared/translation";

const { Text, Link, Title } = Typography;

export const RegistrationComponent: React.FC = () => {
    const router = useRouter();
    const { t } = useTranslation(Namespace.content);
    const { value, keydown, format, blur, setValue } = useMask({
        pattern: "+7 (___) ___-__-__",
        skipSymbol: "0",
    });
    const onFinishHandler = () => {
        router.push("/registration/enterCode");
    };

    return (
        <div className={styles.container}>
            <Logo/>
            <div className={styles.title}>
                <Title style={{ margin: 0 }} level={3}>{t("registrationForm:labels:defaults:createAccount")}</Title>
                <Text>{t("registrationForm:labels:defaults:alreadyHaveAccount")} <Link href="/login">{t("registrationForm:labels:defaults:enter")}</Link></Text>
            </div>
            <Text>{t("registrationForm:labels:defaults:weSendCode")}</Text>
            <Form
                name="loginForm"
                autoComplete="true"
                onFinish={onFinishHandler}
            >
                <Form.Item className={styles["ant-form-item"]}>
                    <Input
                        allowClear={{ clearIcon: <CloseOutlined onClick={() => setValue("")}/> }}
                        value={value}
                        onInput={format}
                        onFocus={format}
                        onKeyDown={keydown}
                        onBlur={blur}
                        type="text"
                        placeholder={t("registrationForm:placeholders:defaults:phone")}
                    />
                </Form.Item>
                <Form.Item>
                    <Button className={styles.submit} type="primary" htmlType="submit">
                        {t("registrationForm:labels:defaults:further")}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
