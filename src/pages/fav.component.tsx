import { Header, FavEventList } from "@/widgets";
import { Gap } from "@/shared/ui";

import styles from "./index.module.scss";


export function Fav() {

    return (
        <>
            <main className={styles.main}>
                <Header/>
                <Gap size="m"/>
                <FavEventList link="#" title="Избранное"/>
            </main>
        </>
    );
}
