import { useTranslation } from "@/shared/translation";
import { useGetAllEvents } from "@/shared/api/hooks";
import { List } from "antd";
import { Filters, Header } from "@/widgets";
import * as styles from "./index.module.scss";
import { Gap } from "@/shared/ui/gap";
import { EventCard } from "@/entities";


export function Index() {
    const { t } = useTranslation();
    const { allEvents, allEventsLoading, allEventsError } = useGetAllEvents();
    const allEventsLoaded = !allEventsLoading && !allEventsError;
    return (
        <>
            <main className={styles.main}>
                <Header/>
                <Gap size="m"/>
                <Filters/>
                <Gap size="m"/>
                <List loading={allEventsLoading}>
                    <div className={styles.eventContainer}>
                        {
                            allEventsLoaded && allEvents.map((event) => <EventCard event={event} key={event.uuid}/>)
                        }
                    </div>
                </List>
            </main>
        </>
    );
}
