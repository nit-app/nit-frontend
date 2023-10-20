import React from "react";
import { Logo } from "@/shared/elements/logo";
import { Button, Form, Input } from "antd";
import styles from "./style.module.scss";
import { Typography } from "antd";
import { useRouter } from "next/router";

const { Title } = Typography;
export const FinishRegistrationComponent = () => {
    const router = useRouter();
    const onFinish = () => {
        router.push("/");
    };
    return (
        <div className={styles.container}>
            <Logo/>
            <Title className={styles.title} level={3}>Введите свои данные</Title>
            <Form
                onFinish={onFinish}
                colon={false}
            >
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Введите Ваше имя",
                        },
                    ]}>
                    <Input placeholder="Имя"/>
                </Form.Item>
                <Form.Item
                    name="surname"
                    rules={[
                        {
                            required: true,
                            message: "Введите Вашу фамилию",
                        },
                    ]}>
                    <Input placeholder="Фамилия"/>
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 40 }}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Введите пароль",
                        },
                    ]}
                    help="Должно быть не менее 8 символов"
                    hasFeedback
                >
                    <Input.Password minLength={8} placeholder="Пароль"/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Подтвердите ваш пароль",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error("Пароли не совпадают"));
                            },
                        }),
                    ]}
                >
                    <Input.Password minLength={8} placeholder="Повторите пароль"/>
                </Form.Item>
                <Form.Item>
                    <Button className={styles.submit} type="primary" htmlType="submit">
                        Создать аккаунт
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};