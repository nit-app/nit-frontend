import * as styles from "./eventList.module.scss";
import { EventCard } from "@/entities";
import { List } from "antd";
import { useLookupEvents } from "@/shared/api/hooks";
import { FiltersPayload } from "@/shared/api/queries/events/types";

interface EventListProps {
    title: string;
    filters: FiltersPayload;
}

export function EventList({ title, filters }: EventListProps) {
    const { events, isEventsLoading } = useLookupEvents(filters);

    return (
        <List loading={isEventsLoading}>
            <div className={styles.eventContainer}>
                {
                    !isEventsLoading && events.map((event) => <EventCard event={event} key={event.uuid}/>)
                }
            </div>
        </List>
    );

}