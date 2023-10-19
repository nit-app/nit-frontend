import React from "react";
import { useRouter } from "next/router";
import { useMask } from "@/shared/hooks";
import styles from "@/features/login/style.module.scss";
import { Logo } from "@/shared/elements/logo";
import { Button, Form, Input, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Text, Link, Title } = Typography;
export const RegistrationComponent: React.FC = () => {
    const router = useRouter();
    const { value, keydown, format, blur, setValue } = useMask({
        pattern: "+7 (000) 000 00-00",
        skipSymbol: "0",
    });
    const onFinishHandler = () => {
        router.push("/registration/enterCode");
    };
    return (
        <div className={styles.container}>
            <Logo/>
            <div className={styles.title}>
                <Title style={{ margin: 0 }} level={3}>Создать аккаунт</Title>
                <Text>Уже есть аккаунт? <Link href="/login">Войти</Link></Text>
            </div>
            <Text>Мы отправим код подтверждения</Text>
            <Form
                style={{ width: "100%" }}
                name="loginForm"
                autoComplete="true"
                onFinish={onFinishHandler}
            >
                <Form.Item style={{ marginBottom: 16 }}>
                    <Input
                        allowClear={{ clearIcon: <CloseOutlined onClick={() => setValue("")}/> }}
                        value={value}
                        onInput={format}
                        onFocus={format}
                        onKeyDown={keydown}
                        onBlur={blur}
                        type="text"
                        placeholder="Телефон"
                    />
                </Form.Item>
                <Form.Item>
                    <Button style={{ width: "100%" }} type="primary" htmlType="submit">
                        Далее
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};