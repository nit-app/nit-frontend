import * as styles from "./eventCard.module.scss";
import { Event } from "@/shared/api/queries/events/types";
import { Typography } from "@/shared/ui/typography";
import { HeartFilled, HeartOutlined, LoadingOutlined, UserOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import Link from "next/link";
import { useToggleFav } from "@/shared/api/hooks/event/useFav.post";
import { useLookupFavs } from "@/shared/api/hooks/event/useFav.get";
import { useGetMe } from "@/shared/api/hooks";

interface EventCardProps {
    event: Event;
}

const { Title, Text } = Typography;

export function EventCard({ event }: EventCardProps) {
    const { auth } = useGetMe();
    const { favs = [] } = useLookupFavs();
    const { toggleFav, isLoading } = useToggleFav(favs?.map(f => f.uuid) ?? []);
    const toggleFavHandler = async () => {
        const liked = Boolean(favs?.find(e => e.uuid === event.uuid));
        await toggleFav(event);
        if (liked) event.favCount--;
        else event.favCount++;
    };
    const liked = favs?.find(e => e.uuid === event.uuid);
    const HeartElement = isLoading ? LoadingOutlined : liked ? HeartFilled : HeartOutlined;

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
                <div className={styles.eventLikesRow}>
                    <Typography.Link className={styles.eventFavCountRow}>
                        <><UserOutlined/>{event.favCount}</>
                    </Typography.Link>
                    {auth && <HeartElement style={{
                        zIndex: 100,
                        color: "red",
                    }} onClick={toggleFavHandler}/>}
                </div>
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