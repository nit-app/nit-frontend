import { Index } from "@/pages/index.component";
import { ssrTranslation } from "@/shared/translation/index.ssr";
import { key, Namespace } from "@/shared/translation";

export default Index;

export const getServerSideProps = async ({ locale }: { locale: string }) => {
    const { t, i18nSSRConfig } = await ssrTranslation(locale);
    return {
        props: {
            ...i18nSSRConfig,
            meta: {
                title: t(key(Namespace.service, "title"), { name: "Главная страница" }),
                tags: [
                    {
                        name: "title",
                        content: t(key(Namespace.service, "title"), { name: "Главная страница" }),
                        key: "title"
                    },
                ]
            }
        }
    };
};