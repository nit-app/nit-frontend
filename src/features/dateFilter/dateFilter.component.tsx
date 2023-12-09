import { CalendarOutlined } from "@ant-design/icons";
import { ConfigProvider, DatePicker } from "antd";

import { Button } from "@/shared/ui/button";
import * as styles from "./dateFilter.module.scss";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface DateFilterProps {
    from: string;
    to: string;
    setRange: (from: string, to: string) => void;
}

export function DateFilter(props: DateFilterProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function onClick() {
        setIsOpen(s => !s);
    }

    function onChange(dates: [Dayjs, Dayjs]) {
        const [from, to] = dates;
        props.setRange(from.toISOString(), to.toISOString());
    }

    return (
        <div className={styles.datePickerContainer}>
            <ConfigProvider theme={{
                components: {
                    DatePicker: {
                        cellActiveWithRangeBg: "#a2c9ff"
                    }
                }
            }}>
                <DatePicker.RangePicker
                    value={[dayjs(props.from), dayjs(props.to)]}
                    open={isOpen}
                    onChange={onChange}
                    className={styles.ghostDatePicker}/>
                <Button onClick={onClick}>Дата<CalendarOutlined/></Button>
            </ConfigProvider>
        </div>
    );
}