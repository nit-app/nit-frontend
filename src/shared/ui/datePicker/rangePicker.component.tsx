import { ConfigProvider, DatePicker as AntdDatePicker } from "antd";
import locale from "antd/locale/ru_RU";
import CalendarLocale from "rc-picker/lib/locale/ru_RU";

export function RangePicker(props: typeof AntdDatePicker.RangePicker["propTypes"]) {
    console.log(locale, CalendarLocale);
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
