import { TagOutlined } from "@ant-design/icons";
import { Button } from "@/shared/ui/button";
import { Namespace, useTranslation } from "@/shared/translation";

interface TagFilterProps {

}

export function TagFilter(props: TagFilterProps) {
    const { t } = useTranslation(Namespace.content);

    return (
        <Button>{t("filters:tags")}<TagOutlined/></Button>
    );
}