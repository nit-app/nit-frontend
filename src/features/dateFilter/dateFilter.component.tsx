import { CalendarOutlined } from "@ant-design/icons";
import { DatePicker, Button, Popover } from "@/shared/ui";
import React, { useEffect, useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import styles from "./dateFilter.module.scss";
import { Namespace, useTranslation } from "@/shared/translation";

interface DateFilterProps {
    from: string | null;
    to: string | null;
    setRange: (from: string | null, to: string | null) => void;
}

export function DateFilter(props: DateFilterProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { t } = useTranslation(Namespace.content);

    const datePickerRef = useRef<HTMLDivElement | null>(null);

    function onChange(dates: [Dayjs | null, Dayjs | null] | null) {
        if (!dates || !dates[0] || !dates[1]) return props.setRange(null, null);
        const [from, to] = dates;
        props.setRange(from?.toISOString() ?? null, to?.toISOString() ?? null);
        setIsOpen(false);
    }

    useEffect(() => {
        function listener(event: MouseEvent) {
            const datePickerElement = document.getElementsByClassName("ant-picker-dropdown")?.[0];
            if (datePickerRef.current && datePickerElement && event.target) {
                if (
                    !datePickerElement.contains(event.target as Node) &&
                    !datePickerRef.current.contains(event.target as Node)
                ) setIsOpen(false);
            }
        }

        document.addEventListener("click", listener);
        return () => document.removeEventListener("click", listener);
    }, []);

    return (
        <div className={styles.datePickerContainer} ref={datePickerRef}>
            <Popover
                trigger='click'
                onOpenChange={(v) => {
                    setIsOpen(v);
                }}
                open={isOpen}
                destroyTooltipOnHide
                content={
                    <div className={styles.datePickerPopoverContent}>
                        <DatePicker.RangePicker
                            value={[dayjs(props.from), dayjs(props.to)]}
                            open
                            variant='outlined'
                            format='DD.MM.YYYY'
                            onChange={onChange}
                            className={styles.ghostDatePicker}
                        />
                    </div>
                }>

                <Button>{t("filters:date")}<CalendarOutlined/></Button>
            </Popover>
        </div>
    );
}