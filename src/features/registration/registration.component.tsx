import React from "react";
import { useRouter } from "next/router";
import { useMask } from "@/shared/hooks";
import styles from "@/features/login/style.module.scss";
import { Logo } from "@/shared/elements/logo";
import { CloseOutlined } from "@ant-design/icons";
import ru from "../../../public/locales/ru/content.json";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";

const { Text, Link, Title } = Typography;
export const RegistrationComponent: React.FC = () => {
    const router = useRouter();
    const locale = ru;
    const { alreadyHaveAccount } = locale.registrationForm.label.defaults;
    const { placeholders, labels } = locale.form;
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
                <Title style={{ margin: 0 }} level={3}>{labels.defaults.createAccount}</Title>
                <Text> <Link href="/login">{labels.defaults.enter}</Link></Text>
            </div>
            <Text>{alreadyHaveAccount}{labels.defaults.weSendCode}</Text>
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
                        placeholder={placeholders.defaults.phone}
                    />
                </Form.Item>
                <Form.Item>
                    <Button className={styles.submit} type="primary" htmlType="submit">
                        {labels.defaults.further}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
