import { ConfigProvider, DatePicker as AntdDatePicker } from "antd";

export function RangePicker(props: typeof AntdDatePicker.RangePicker["propTypes"]) {
    return (
        <ConfigProvider theme={{
            components: {
                DatePicker: {
                    cellActiveWithRangeBg: "#a2c9ff"
                }
            }
        }}>
            <AntdDatePicker.RangePicker {...props}/>
        </ConfigProvider>
    );
}
