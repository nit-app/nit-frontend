import { ConfigProvider, DatePicker as AntdDatePicker } from "antd";
import locale from "antd/locale/ru_RU";
import { ForwardedRef, forwardRef } from "react";

export const RangePicker = forwardRef(RangePickerInner);

export function RangePickerInner(props: typeof AntdDatePicker.RangePicker["propTypes"], ref: ForwardedRef<string>) {
    return (
        <ConfigProvider
            theme={{
                components: {
                    DatePicker: {
                        cellActiveWithRangeBg: "#a2c9ff"
                    }
                }
            }}>
            <AntdDatePicker.RangePicker
                ref={ref}

                locale={{
                    ...locale.DatePicker,
                    lang: {
                        ...locale.DatePicker?.lang,
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
                    },

                }}
                {...props}
            />
        </ConfigProvider>
    );
}
