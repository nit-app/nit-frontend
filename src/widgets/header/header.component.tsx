import Link from "next/link";

import styles from "./style.module.scss";

import { Logo } from "@/shared/elements/logo";
import { Button } from "@/shared/ui";
import { useGetMe, useRevoke } from "@/shared/api/hooks";
import { Namespace, useTranslation } from "@/shared/translation";


export function Header() {
    const { auth, isUserLoading } = useGetMe();
    const { mutateAsync } = useRevoke();
    const { t } = useTranslation(Namespace.content);
    return (
        <div className={styles.header}>
            <div className={styles.menuContainer}>
                <Link href={"/"}><Logo/></Link>
            </div>
            <div className={styles.actionButtons}>
                {!auth && !isUserLoading && (
                    <>
                        <Button href="/login" type="primary">{t("header:login")}</Button>
                        <Button href="/registration" ghost type="primary">{t("header:register")}</Button>
                    </>
                )}
                {auth && !isUserLoading && (
                    <>
                        <Button onClick={mutateAsync} ghost type="primary">Выйти</Button>
                    </>
                )}

            </div>
        </div>
    );
}