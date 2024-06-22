import styles from "./draft.module.scss";

import { Header } from "@/widgets";
import { Gap } from "@/shared/ui";
import { ssrTranslation } from "@/shared/translation/ssrTranslation";
import { GetServerSidePropsContext } from "next";
import { DraftPreview } from "@/entities";
import { useState } from "react";
import { Event, Schedule } from "@/shared/api/queries/events/types";
import { Draft } from "@/shared/api/queries/drafts/types";
import { useGetMe } from "@/shared/api/hooks";
import { useRouter } from "next/router";
import { useCreate } from "@/shared/api/hooks/event/useCreateEvent";
import { Dayjs } from "dayjs";


export default function Drafts() {
    const { user, isUserLoading } = useGetMe();
    const { create } = useCreate();

    const createHandler = async (event: Event) => {
        const e = { ...event };
        e.schedule = [
            {
                beginsAt: (e.schedule[0] as unknown as Dayjs).toISOString(),
                endsAt: (e.schedule[1] as unknown as Dayjs).toISOString()

            }
        ] as Schedule[];
        create(e);
    };
    const navigate = useRouter();
    const [activeDraft] = useState<Partial<Draft>>({});

    if (!isUserLoading && !user?.isAdmin) navigate.push("/");

    return (
        <main className={styles.main}>
            <Header/>
            <Gap size="m"/>
            <div className={styles.draftPreview}>
                <DraftPreview onSubmit={createHandler} draft={activeDraft}/>
            </div>
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
                title: "Новое мероприятие",
                tags: [
                    {
                        name: "title",
                        content: "Новое мероприятие",
                        key: "title"
                    },
                ]
            }
        }
    };
};