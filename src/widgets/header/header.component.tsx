import { Logo } from "@/shared/elements/logo";
import { Typography } from "antd";
import * as styles from "./style.module.scss";

const { Text, Title } = Typography;

export function Header() {
    return (
        <div className={styles.header}>
            <Logo/>
            <div className={styles.menu}>
                <Text>Бесплатно</Text>
                <Text>Конференции</Text>
                <Text>Мероприятия</Text>
                <Text>Для организаторов</Text>
                <Text>О сервисе</Text>
            </div>
        </div>
    );
}