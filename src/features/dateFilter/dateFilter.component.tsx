import { CalendarOutlined } from "@ant-design/icons";
import { DatePicker } from "@/shared/ui/datePicker";
import { Button } from "@/shared/ui/button";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import * as styles from "./dateFilter.module.scss";
import { Namespace, useTranslation } from "@/shared/translation";

interface DateFilterProps {
    from: string;
    to: string;
    setRange: (from: string, to: string) => void;
}

export function DateFilter(props: DateFilterProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { t } = useTranslation(Namespace.content);

    function onClick() {
        setIsOpen(s => !s);
    }

    function onChange(dates: [Dayjs, Dayjs]) {
        const [from, to] = dates;
        props.setRange(from.toISOString(), to.toISOString());
    }

    return (
        <div className={styles.datePickerContainer}>
            <DatePicker.RangePicker

                value={[dayjs(props.from), dayjs(props.to)]}
                open={isOpen}
                onChange={onChange}
                className={styles.ghostDatePicker}/>
            <Button onClick={onClick}>{t("filters:date")}<CalendarOutlined/></Button>
        </div>
    );
}