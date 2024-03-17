import styles from "./eventList.module.scss";
import { EventCard } from "@/entities";
import { List } from "antd";
import { useLookupEvents } from "@/shared/api/hooks";
import { FiltersPayload } from "@/shared/api/queries/events/types";
import { Typography } from "@/shared/ui/typography";
import { key, Namespace, useTranslation } from "@/shared/translation";
import { Loader } from "@/shared/ui";
import { LoadingOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface EventListProps {
    title: string;
    link: string;
    filters: FiltersPayload;
}

export function EventList({ title, filters }: EventListProps) {
    const { events, isEventsLoading, isEventsError } = useLookupEvents(filters);

    const { t } = useTranslation();

    return (
        <div className={styles.listContainer}>
            <div className={styles.headerContainer}>
                <Title level={3}>{title}</Title>
            </div>
            <List loading={isEventsLoading ? { indicator: <LoadingOutlined/> } : false}>
                {isEventsError && <Text>{t(key(Namespace.content, "wentWrong"))}</Text>}
                <div className={styles.eventContainer}>
                    {
                        !isEventsLoading && events.map((event) => <EventCard event={event} key={event.uuid}/>)
                    }
                </div>
            </List>
        </div>
    );

}