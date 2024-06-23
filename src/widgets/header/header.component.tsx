import Link from "next/link";

import styles from "./style.module.scss";

import { Logo } from "@/shared/elements/logo";
import { Button } from "@/shared/ui";
import { useGetMe, useRevoke } from "@/shared/api/hooks";
import { Namespace, useTranslation } from "@/shared/translation";
import { HeartFilled, PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";


export function Header() {
    const { auth, isUserLoading, user } = useGetMe();
    const { mutateAsync } = useRevoke();
    const navigate = useRouter();
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
                        <Link href='/fav'><HeartFilled className={styles.favIcon}/></Link>
                        {auth && user?.isAdmin && (
                            <>
                                <Button href='/drafts/new' ghost type='primary'><PlusOutlined/></Button>
                            <Button href='/drafts' ghost type="primary">Черновики</Button>
                            </>
                        )}
                        <Button onClick={() => mutateAsync().then(() => navigate.push("/login"))} ghost type="primary">Выйти</Button>
                    </>
                )}
            </div>
        </div>
    );
}