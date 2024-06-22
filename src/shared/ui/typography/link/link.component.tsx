import { ConfigProvider, Typography as AntdTypography } from "antd";
import { ComponentProps, PropsWithChildren } from "react";

const { Link: AntdLink } = AntdTypography;

type LinkProps = PropsWithChildren & Omit<ComponentProps<typeof AntdLink>, "type"> & {
    type?: ComponentProps<typeof AntdLink>["type"] | "text";
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
            return <AntdLink {...other}></AntdLink>;
    }
}