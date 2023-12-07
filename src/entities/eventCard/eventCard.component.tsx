import * as styles from "./eventCard.module.scss";
import { Event } from "@/shared/api/queries/event/types";
import { Typography } from "@/shared/ui/typography";
import { UserOutlined } from "@ant-design/icons";
import { Tag } from "antd";

interface EventCardProps {
    event: Event;
}

const { Title, Text, Link } = Typography;

export function EventCard({ event }: EventCardProps) {
    return (
        <div className={styles.eventCard}>
            <div className={styles.eventHeaderContainer}>
                <div className={styles.eventCardHeaderRow}>
                    <Title level={4}>{event.title}</Title>
                    {event.ageLimitLow > 0 && <Text>{event.ageLimitLow}+</Text>}
                </div>
                <div className={styles.eventDateAndLocationContainer}>
                    <div className={styles.eventDateRow}>
                        <Text>{new Date(event.schedule[0].beginsAt).toLocaleString("ru", {
                            day: "numeric",
                            year: "numeric",
                            month: "long"
                        })}</Text>
                    </div>
                    <div className={styles.eventLocationRow}>
                        <Text>{event.location}</Text>
                    </div>
                </div>
                <Link className={styles.eventFavCountRow}><UserOutlined/>{event.favCount}</Link>
            </div>
            <div className={styles.eventDescriptionContainer}>
                <Text>{event.description}</Text>
            </div>
            <div className={styles.eventTagsContainer}>
                {event.tags.map((tag, index) => <Tag.CheckableTag checked={true}
                                                                  key={`${tag}-${index}`}>{tag}</Tag.CheckableTag>)}
            </div>
        </div>
    );
}