import { useTranslation, key, Namespace } from "@/shared/translation";
import { useGetAllEvents } from "@/shared/api/hooks";
import { List, Typography } from "antd";
import { Event } from "@/other/mirage/types";
import { Header } from "@/widgets";
import * as styles from "./index.module.scss";

const { Text, Title } = Typography;

export function Index() {
    const { t } = useTranslation();
    const { allEvents, allEventsLoading, allEventsError } = useGetAllEvents();
    const allHelloLoaded = !allEventsLoading && !allEventsError;
    return (
        <>
            <main className={styles.main}>
                <Header/>
                <Title>{t(key(Namespace.content, "event"), ".")}</Title>
                <List loading={allEventsLoading}>
                    {
                        allHelloLoaded && allEvents.map((event: Event) => (
                                <List.Item key={event.id}><Text>{event.title}</Text></List.Item>
                            )
                        )
                    }
                </List>
            </main>
        </>
    );
}
