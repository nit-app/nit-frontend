import { Input } from "@/shared/ui/input";
import { SearchOutlined } from "@ant-design/icons";
import * as styles from "./searchFilter.module.scss";
import { Namespace, useTranslation } from "@/shared/translation";

export function SearchFilter() {
    const { t } = useTranslation(Namespace.content);
    return (
        <Input
            rootClassName={styles.search}
            placeholder={t("filters:searchPlaceholder")}
            prefix={<SearchOutlined/>}
        />
    );
}