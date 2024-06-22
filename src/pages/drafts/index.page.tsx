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
import { useGetMe } from "@/shared/api/hooks";
import { useRouter } from "next/router";
import { usePublish } from "@/shared/api/hooks/event/publish.post";


export default function Drafts() {
    const { drafts, isDraftsLoading } = useLookupDrafts();

    const { publish } = usePublish();
    const { user, isUserLoading } = useGetMe();
    const navigate = useRouter();
    const [activeDraft, setActiveDraft] = useState<Draft | undefined>();

    if (!isUserLoading && !user?.isAdmin) navigate.push("/");
    if (isDraftsLoading) return (
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
                <div className={styles.draftList}>
                    {drafts.map(draft => <DraftCard key={draft.uuid} draft={draft}
                                                    onClick={() => setActiveDraft(draft)}/>)}
                </div>
                <div className={styles.draftPreview}>
                    <DraftPreview onSubmit={(f) => publish(f.uuid)} draft={activeDraft}/>
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
                title: "Черновики",
                tags: [
                    {
                        name: "title",
                        content: "Черновики",
                        key: "title"
                    },
                ]
            }
        }
    };
};