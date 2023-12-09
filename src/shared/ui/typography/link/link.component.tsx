import { ConfigProvider, Typography as AntdTypography } from "antd";

const { Link: AntdLink } = AntdTypography;

type LinkProps = Omit<typeof AntdLink["propTypes"], "type"> & {
    type?: typeof AntdLink["propTypes"]["type"] | "text";
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

export function Link(props: LinkProps) {
    const { type, ...other } = props;
    switch (type) {
        case "text":
            return (
                <ConfigProvider
                    theme={themes[type]}
                >
                    <AntdLink {...other}></AntdLink>
                </ConfigProvider>
            );
        default:
            return <AntdLink {...props}></AntdLink>;
    }
}