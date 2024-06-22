import styles from "./eventList.module.scss";
import { EventCard } from "@/entities";
import { List } from "antd";
import { Typography } from "@/shared/ui/typography";
import { key, Namespace, useTranslation } from "@/shared/translation";
import { LoadingOutlined } from "@ant-design/icons";
import { useLookupFavs } from "@/shared/api/hooks/event/useFav.get";

const { Title, Text } = Typography;

interface EventListProps {
    title: string;
    link: string;
}

export function FavEventList({ title }: EventListProps) {
    const { favs, isFavsLoading, isFavsError } = useLookupFavs();

    const { t } = useTranslation();

    return (
        <div className={styles.listContainer}>
            <div className={styles.headerContainer}>
                <Title level={3}>{title}</Title>
            </div>
            <List loading={isFavsLoading ? { indicator: <LoadingOutlined/> } : false}>
                {isFavsError && <Text>{t(key(Namespace.content, "wentWrong"))}</Text>}
                <div className={styles.eventContainer}>
                    {
                        (!isFavsLoading && favs) && favs.map((event) => <EventCard event={event} key={event.uuid}/>)
                    }
                </div>
            </List>
        </div>
    );

}