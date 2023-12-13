import { ConfigProvider, Button as AntdButton } from "antd";


type ButtonProps = Omit<typeof AntdButton["propTypes"], "type"> & {
    type: typeof AntdButton["propTypes"]["type"] | "text";
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
        case "":
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