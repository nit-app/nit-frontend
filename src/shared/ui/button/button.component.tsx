import { ConfigProvider, Button as AntdButton } from "antd";
import { ComponentProps } from "react";


type ButtonProps = Omit<ComponentProps<typeof AntdButton>, "type"> & {
    type: ComponentProps<typeof AntdButton>["type"] | "text";
}

const themes = {
    "text": {
        components: {
            Typography: {
                colorLink: "#011127"
            }
        }
    }
};

export function Button(props: ButtonProps) {
    const { type, ...other } = props;
    switch (type) {
        case "text":
            return (
                <ConfigProvider
                    theme={themes[type]}
                >
                    <AntdButton {...other}></AntdButton>
                </ConfigProvider>
            );
        default:
            return <AntdButton {...props}></AntdButton>;
    }
}