import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export interface LoaderProps {
    size?: "s" | "m" | "l";
}

export function Loader(props: LoaderProps) {
    let size = 14;

    switch (props.size) {
        case "m":
            size = 16;
            break;
        case "l":
            size = 24;
            break;
        default:
            break;
    }

    return <Spin indicator={<LoadingOutlined style={{ fontSize: `${size}px` }}/>}/>;
}