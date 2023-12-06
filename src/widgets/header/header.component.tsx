import { Logo } from "@/shared/elements/logo";
import { Typography } from "antd";
import * as styles from "./style.module.scss";
import { Button } from "@/shared/ui/button";

const { Text } = Typography;

export function Header() {
    return (
        <div className={styles.header}>
                <div className={styles.menuContainer}>
                <Logo/>
                <div className={styles.menu}>
                    <Text>Для организаторов</Text>
                    <Text>О сервисе</Text>
                </div>
            </div>
            <div className={styles.actionButtons}>
                <Button type="primary">Войти</Button>
                <Button>Регистрация</Button>
            </div>
        </div>
    );
}