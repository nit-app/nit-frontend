import { DatePicker as AntdDatePicker } from "antd";
import { RangePicker } from "./rangePicker.component";

export const DatePicker: typeof AntdDatePicker = { ...AntdDatePicker, RangePicker: RangePicker };
