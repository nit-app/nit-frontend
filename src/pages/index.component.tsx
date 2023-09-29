import { useTranslation, key, Namespace } from "@/shared/translation";


export function Index() {
    const { t } = useTranslation();
    return (
        <>
            <main>
                {t(key(Namespace.content, "hello"), ".")}
            </main>
        </>
    );
}


