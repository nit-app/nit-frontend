import React from "react";
import { Logo } from "@/shared/elements/logo";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import ru from "@/../public/locales/ru/content.json";
import { Typography } from "@/shared/ui/typography";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

const { Title } = Typography;
export const FinishRegistrationComponent = () => {
    const router = useRouter();
    const locale = ru;
    const { enterYourData } = locale.finishRegistrationForm.label.defaults;
    const { helps, placeholders, labels } = locale.form;
    const onFinish = () => {
        router.push("/");
    };
    return (
        <div className={styles.container}>
            <Logo/>
            <Title className={styles.title}
                   level={3}>{enterYourData}</Title>
            <Form
                onFinish={onFinish}
                colon={false}
            >
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: labels.defaults.enterYourName,
                        },
                    ]}>
                    <Input placeholder={placeholders.defaults.name}/>
                </Form.Item>
                <Form.Item
                    name="surname"
                    rules={[
                        {
                            required: true,
                            message: labels.defaults.enterYourSurname,
                        },
                    ]}>
                    <Input placeholder={placeholders.defaults.surname}/>
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 40 }}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: labels.defaults.enterYourPassword,
                        },
                    ]}
                    help={helps.defaults.mustBeLeast8CharactersLong}
                    hasFeedback
                >
                    <Input.Password minLength={8} placeholder={placeholders.defaults.password}/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: helps.defaults.confirmYourPassword,
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error(helps.defaults.passwordDontMatch));
                            },
                        }),
                    ]}
                >
                    <Input.Password minLength={8} placeholder={placeholders.defaults.repeatPassword}/>
                </Form.Item>
                <Form.Item>
                    <Button className={styles.submit} type="primary" htmlType="submit">
                        {labels.defaults.createAccount}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};