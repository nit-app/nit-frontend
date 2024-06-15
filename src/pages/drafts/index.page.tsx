import styles from "./draft.module.scss";
import { Spin } from "antd";

import { Header } from "@/widgets";
import { Gap } from "@/shared/ui";
import { ssrTranslation } from "@/shared/translation/ssrTranslation";
import { GetServerSidePropsContext } from "next";
import { useLookupDrafts } from "@/shared/api/hooks/drafts/useDrafts.get";
import { DraftCard, DraftPreview } from "@/entities";
import { useState } from "react";
import { Draft } from "@/shared/api/queries/drafts/types";


export default function Drafts() {
    const { drafts, isDraftsLoading } = useLookupDrafts();

    const [activeDraft, setActiveDraft] = useState<Draft | undefined>();
    if (isDraftsLoading) return (
        <main className={styles.main}>
            <Header/>
            <Gap size="m"/>
            <Spin/>
            <div style={{ paddingBottom: "40px" }}/>
        </main>
    );
    console.log(drafts);

    return (
        <main className={styles.main}>
            <Header/>
            <Gap size="m"/>
            <div className={styles.mainContainer}>
                <div className={styles.draftList}>
                    {drafts.map(draft => <DraftCard key={draft.uuid} draft={draft} onClick={() => setActiveDraft(draft)}/>)}
                </div>
                <div className={styles.draftPreview}>
                    <DraftPreview onSubmit={console.log} draft={activeDraft}/>
                </div>
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