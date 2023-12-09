import { Logo } from "@/shared/elements/logo";
import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";

import * as styles from "./style.module.scss";
import { Namespace, useTranslation } from "@/shared/translation";


const { Link } = Typography;

export function Header() {
    const { t } = useTranslation(Namespace.content);
    return (
        <div className={styles.header}>
            <div className={styles.menuContainer}>
                <Logo/>
                <li className={styles.menu}>
                    <ul><Link type="text">{t("header:forOrganizations")}</Link></ul>
                    <ul><Link type="text">{t("header:aboutService")}</Link></ul>
                </li>
            </div>
            <div className={styles.actionButtons}>
                <Button href='/login' type="primary">{t("header:login")}</Button>
                <Button href='/registration' ghost type="primary">{t("header:register")}</Button>
            </div>
        </div>
    );
}