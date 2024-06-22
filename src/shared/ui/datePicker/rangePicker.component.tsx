import { ConfigProvider, DatePicker as AntdDatePicker } from "antd";
import locale from "antd/locale/ru_RU";
import { ComponentProps, ForwardedRef, forwardRef } from "react";

export const RangePicker = forwardRef(RangePickerInner);

export function RangePickerInner(props: ComponentProps<typeof AntdDatePicker.RangePicker>, ref: ForwardedRef<unknown>) {
    return (
        <ConfigProvider
            theme={{
                components: {
                    DatePicker: {
                        cellActiveWithRangeBg: "#a2c9ff"
                    }
                }
            }}
            locale={{
                ...locale,
                Calendar: {
                    ...locale.Calendar,
                    lang: {
                        ...locale.Calendar?.lang,
                        shortWeekDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                        shortMonths: [
                            "Янв",
                            "Фев",
                            "Мар",
                            "Апр",
                            "Май",
                            "Июнь",
                            "Июль",
                            "Авг",
                            "Сен",
                            "Окт",
                            "Ноя",
                            "Дек"
                        ]
                    }
                }
            }}
        >
            <AntdDatePicker.RangePicker
                ref={ref as any}
                {...props}
            />
        </ConfigProvider>
    );
}
