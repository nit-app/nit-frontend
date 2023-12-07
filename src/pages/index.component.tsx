import * as styles from "./index.module.scss";
import { useTranslation } from "@/shared/translation";
import { Filters, Header } from "@/widgets";
import { Gap } from "@/shared/ui/gap";
import { EventList } from "@/widgets/eventList/eventList.component";
import { defaultFilters } from "@/shared/api/queries";


export function Index() {
    const { t } = useTranslation();
    return (
        <>
            <main className={styles.main}>
                <Header/>
                <Gap size="m"/>
                <Filters/>
                <Gap size="m"/>
                <EventList title='Все' filters={defaultFilters()}/>
            </main>
        </>
    );
}
