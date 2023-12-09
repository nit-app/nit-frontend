import * as styles from "./eventList.module.scss";
import { EventCard } from "@/entities";
import { List } from "antd";
import { useLookupEvents } from "@/shared/api/hooks";
import { FiltersPayload } from "@/shared/api/queries/events/types";
import { Typography } from "@/shared/ui/typography";
import { Gap } from "@/shared/ui/gap";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title, Link } = Typography;

interface EventListProps {
    title: string;
    link: string;
    filters: FiltersPayload;
}

export function EventList({ title, filters, link }: EventListProps) {
    const { events, isEventsLoading } = useLookupEvents(filters);

    return (
        <div className={styles.listContainer}>
            <div className={styles.headerContainer}>
                <Title>{title}</Title>
                <Link type="text" href={link} className={styles.seeAll}>Смотреть все →</Link>
            </div>
            <List loading={isEventsLoading}>
                <div className={styles.eventContainer}>
                    {
                        !isEventsLoading && events.map((event) => <EventCard event={event} key={event.uuid}/>)
                    }
                </div>
            </List>
        </div>
    );

}