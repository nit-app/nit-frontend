import { Button } from "@/shared/ui/button";
import { TagOutlined, CalendarOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "@/shared/ui/input";
import * as styles from "./style.module.scss";

export function Filters() {
    return (
        <div className={styles.filters}>
            <div className={styles.filterActions}>
                {/* TODO create feature */}
                <Button icon={<CalendarOutlined/>}>Дата</Button>
                <Button icon={<TagOutlined/>}>Теги</Button>
            </div>
            <div>
                {/* TODO create feature and replace hardcoded words to i18n */}
                <Input placeholder='Поиск' style={{ width: "360px" }} prefix={<SearchOutlined/>}></Input>
            </div>
        </div>
    );
}