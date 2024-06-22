import * as styles from "./draftCard.module.scss";
import { Typography } from "@/shared/ui/typography";
import { Draft } from "@/shared/api/queries/drafts/types";

interface DraftCardProps {
    draft: Draft;
    onClick: () => void
}

const { Title, Text } = Typography;

export function DraftCard({ draft, onClick }: DraftCardProps) {
    return (
        <div className={styles.draftCard} onClick={onClick}>
            <div className={styles.draftHeaderContainer}>
                <Title level={5}>{draft.title}</Title>
                <div className={styles.draftDateAndLocationContainer}>
                    <div className={styles.draftDateRow}>
                        <Text>{draft?.schedule?.[0]?.beginsAt ? new Date(draft?.schedule?.[0]?.beginsAt).toLocaleString("ru", {
                            day: "numeric",
                            year: "numeric",
                            month: "long"
                        }) : ""}</Text>
                    </div>
                </div>
            </div>
            <div className={styles.draftDescriptionContainer}>
                <Text>{draft.plainDescription ?? "Нет описания"}</Text>
            </div>
        </div>
    );
}