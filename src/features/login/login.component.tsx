import React from "react";
import { useMask } from "@/shared/hooks";
import { Button, Form, Input, Typography } from "antd";
import styles from "./style.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import { Logo } from "@/shared/elements/logo";
import { useRouter } from "next/router";


const { Text, Link, Title } = Typography;
export const LoginComponent: React.FC = () => {
    const router = useRouter();
    const { value, keydown, format, blur, setValue } = useMask({
        pattern: "+7 (000) 000 00-00",
        skipSymbol: "0",
    });
    const onFinishHandler = () => {
        router.push("/login/enterCode");
    };
    return (
        <div className={styles.container}>
            <Logo/>
            <div className={styles.title}>
                <Title style={{ margin: 0 }} level={3}>Вход в акаунт</Title>
                <Text>Впервые тут? <Link href="/registration">Создать аккаунт</Link></Text>
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
