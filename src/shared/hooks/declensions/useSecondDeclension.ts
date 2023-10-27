import { Namespace, useTranslation } from "@/shared/translation";

export function useSecondDeclension() {
    const { t } = useTranslation(Namespace.content);
    return (count: number) => {
        if (count % 10 >= 5 || (count >= 5 && count <= 20) || count % 10 === 0) {
            return t("declensions:seconds:g");
        }
        if (count % 10 >= 2 && count % 10 <= 4) {
            return t("declensions:seconds:n");
        }
        return t("declensions:second:a");
    };
}