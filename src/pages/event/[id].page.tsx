import styles from "./event.module.scss";
import { Spin, Tag } from "antd";

import { Header } from "@/widgets";
import { Gap, Typography } from "@/shared/ui";
import { ssrTranslation } from "@/shared/translation/ssrTranslation";
import { GetServerSidePropsContext } from "next";
import { useLookupEvent } from "@/shared/api/hooks";
import { useLookupFavs } from "@/shared/api/hooks/event/useFav.get";
import { useToggleFav } from "@/shared/api/hooks/event/useFav.post";
import { HeartFilled, HeartOutlined, LoadingOutlined } from "@ant-design/icons";
import { Link } from "@/shared/ui/typography/link";


const { Title, Text } = Typography;

export default function Event(props: { id: string }) {
    const { event, isEventLoading } = useLookupEvent(props.id);
    const { favs = [] } = useLookupFavs();

    const { toggleFav, isLoading } = useToggleFav(favs?.map(f => f.uuid) ?? []);
    const toggleFavHandler = async () => {
        if (!event) return;
        const liked = Boolean(favs?.find(e => e.uuid === event?.uuid));
        await toggleFav(event);
        if (liked) event.favCount--;
        else event.favCount++;
    };
    const liked = favs?.find(e => e.uuid === event?.uuid);
    const HeartElement = isLoading ? LoadingOutlined : liked ? HeartFilled : HeartOutlined;

    if (isEventLoading || !event) return (
        <main className={styles.main}>
            <Header/>
            <Gap size="m"/>
            <Spin/>
            <div style={{ paddingBottom: "40px" }}/>
        </main>
    );

    return (
        <main className={styles.main}>
            <Header/>
            <Gap size="m"/>
            <div className={styles.mainContainer}>
                <div className={styles.tags}>
                    {
                        event.tags.map((tag, index) => <Tag.CheckableTag
                            checked={true}
                            key={`${tag}-${index}`}>{tag.toUpperCase()}</Tag.CheckableTag>)
                    }
                </div>
                <div className={styles.titleContainer}>
                    <Title level={2}>
                        <HeartElement style={{
                            zIndex: 100,
                            color: "red",
                            marginRight: "5px"
                        }} onClick={toggleFavHandler}/>
                        {event.title}
                    </Title>
                    <div style={{ paddingTop: "48px", height: "max-content" }}>
                        {event.ageLimitLow > 0 && <Tag color={"#1677ff"} style={{
                            marginLeft: "6px",
                            marginBottom: "14px",
                            transform: "scale(1.5)"
                        }}>{event.ageLimitLow}+</Tag>}
                    </div>
                </div>
                <div className={styles.contactContainer}>
                    <Text>{event.location}</Text>
                    <Text>{new Date(event.schedule[0].beginsAt).toLocaleString("ru", {
                        day: "numeric",
                        year: "numeric",
                        month: "long",

                    })} — {new Date(event.schedule[0].endsAt).toLocaleString("ru", {
                        day: "numeric",
                        year: "numeric",
                        month: "long"
                    })}</Text>
                </div>
            </div>
            <div className={styles.other}>
                <Title level={3}>О событии</Title>
                <Text>
                    {event.plainDescription}
                </Text>
            </div>
            <div className={styles.scheduleContainer}>
                <Title level={3}>Расписание</Title>
                {event.schedule.map((s) => {
                    return <div key={s.beginsAt + s.endsAt} className={styles.schedule}>
                        <Text>{new Date(s.beginsAt).toLocaleString("ru", {
                            day: "numeric",
                            year: "numeric",
                            month: "long",
                            hour: "2-digit",
                            minute: "2-digit",
                        })} — {new Date(s.endsAt).toLocaleString("ru", {
                            day: "numeric",
                            year: "numeric",
                            month: "long",
                            hour: "2-digit",
                            minute: "2-digit",
                        })}</Text>
                    </div>;
                })}
            </div>
            {event.ownerInfo && <div>
                <Text>Источник: <Link>{event.ownerInfo}</Link></Text>
            </div>
            }
            <div style={{ paddingBottom: "40px" }}/>
        </main>
    );
}

export const getServerSideProps = async ({ locale, ...context }: GetServerSidePropsContext<{
    locale: string,
    id: string
}>) => {
    const { i18nSSRConfig } = await ssrTranslation(locale ?? "");
    const uuid = context.params?.id || "";
    return {
        props: {
            ...i18nSSRConfig,
            id: uuid,
            meta: {
                title: "Мероприятие",
                tags: [
                    {
                        name: "title",
                        content: "Мероприятие",
                        key: "title"
                    },
                ]
            }
        }
    };
};