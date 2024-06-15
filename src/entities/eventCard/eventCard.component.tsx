import * as styles from "./eventCard.module.scss";
import { Event } from "@/shared/api/queries/events/types";
import { Typography } from "@/shared/ui/typography";
import { UserOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import Link from "next/link";

interface EventCardProps {
    event: Event;
}

const { Title, Text } = Typography;

export function EventCard({ event }: EventCardProps) {
    return (
        <div className={styles.eventCard}>
            <Link href={`/event/${event.uuid}`} className={styles.eventLink}/>
                <div className={styles.eventHeaderContainer}>
                    <div className={styles.eventCardHeaderRow}>
                        <Title level={4}>{event.title}</Title>
                        {event.ageLimitLow > 0 && <Text>{event.ageLimitLow}+</Text>}
                    </div>
                    <div className={styles.eventDateAndLocationContainer}>
                        <div className={styles.eventDateRow}>
                            <Text>{new Date(event.schedule?.[0]?.beginsAt).toLocaleString("ru", {
                                day: "numeric",
                                year: "numeric",
                                month: "long"
                            })}</Text>
                        </div>
                        <div className={styles.eventLocationRow}>
                            <Text>{event.location}</Text>
                        </div>
                    </div>
                    <Typography.Link className={styles.eventFavCountRow}>
                        <><UserOutlined/>{event.favCount}</>
                    </Typography.Link>
                </div>
                <div className={styles.eventDescriptionContainer}>
                    <Text>{event.plainDescription}</Text>
                </div>
                <div className={styles.eventTagsContainer}>
                    {event.tags.map((tag, index) => <Tag.CheckableTag checked={true}
                                                                      key={`${tag}-${index}`}>{tag.toUpperCase()}</Tag.CheckableTag>)}
                </div>
        </div>
    );
}