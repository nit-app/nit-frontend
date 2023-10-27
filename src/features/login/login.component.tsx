import React from "react";
import { useMask } from "@/shared/hooks";
import styles from "./style.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import { Logo } from "@/shared/elements/logo";
import { useRouter } from "next/router";
import { Typography } from "@/shared/ui/typography";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Namespace, useTranslation } from "@/shared/translation";


const { Text, Link, Title } = Typography;
export const LoginComponent: React.FC = () => {
    const router = useRouter();
    const { t } = useTranslation(Namespace.content);
    const { value, keydown, format, blur, setValue } = useMask({
        pattern: "+7 (___) ___-__-__",
        skipSymbol: "_",
    });

    const onFinishHandler = () => {
        router.push("/login/enterCode");
    };

    return (
        <div className={styles.container}>
            <Logo/>
            <div className={styles.title}>
                <Title style={{ margin: 0 }} level={3}>{t("loginForm:labels:defaults:loginAccount")}</Title>
                <Text>Впервые тут? <Link
                    href="/registration">{t("loginForm:labels:defaults:createAccount")}</Link></Text>
            </div>
            <Text>{t("loginForm:labels:defaults:weSendCode")}</Text>
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
                        placeholder={t("loginForm:placeholders:defaults:phone")}
                    />
                </Form.Item>
                <Form.Item>
                    <Button className={styles.submit} type="primary" htmlType="submit">
                        {t("loginForm:labels:defaults:further")}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
