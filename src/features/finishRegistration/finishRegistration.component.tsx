import React from "react";
import { Logo } from "@/shared/elements/logo";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { Typography } from "@/shared/ui/typography";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Namespace, useTranslation } from "@/shared/translation";
import { useRegistrationFinish } from "@/shared/api/hooks";

const { Title } = Typography;

type FinishRegistrationFieldType = {
    firstName: string;
    lastName: string;
}
export const FinishRegistrationComponent = () => {
    const router = useRouter();
    const { t } = useTranslation(Namespace.content);
    const { registrationFinish, registrationFinishIsLoading } = useRegistrationFinish();

    const onFinish = (values: FinishRegistrationFieldType) => {
        if (registrationFinishIsLoading) return;
        registrationFinish(values)
            .then(() => {
                window.location = "/";
            })
            .catch(e => console.log(e)); //for testing in debug mode
    };
    return (
        <div className={styles.container}>
            <Logo/>
            <Title className={styles.title}
                   level={3}>{t("finishRegistrationForm:labels:defaults:enterYourData")}</Title>
            <Form
                name="finishRegistrationForm"
                onFinish={onFinish}
                colon={false}
            >
                <Form.Item<FinishRegistrationFieldType>
                    name="firstName"
                    rules={[
                        {
                            required: true,
                            message: t("finishRegistrationForm:labels:defaults:enterYourName")
                        },
                    ]}>
                    <Input placeholder={t("finishRegistrationForm:placeholders:defaults:name")}/>
                </Form.Item>
                <Form.Item<FinishRegistrationFieldType>
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: t("finishRegistrationForm:labels:defaults:enterYourSurname"),
                        },
                    ]}>
                    <Input placeholder={t("finishRegistrationForm:placeholders:defaults:surname")}/>
                </Form.Item>
                <Form.Item>
                    <Button
                        loading={registrationFinishIsLoading}
                        className={styles.submit}
                        type="primary"
                        htmlType="submit">
                        {t("finishRegistrationForm:labels:defaults:createAccount")}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};