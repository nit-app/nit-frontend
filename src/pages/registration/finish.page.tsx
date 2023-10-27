import { FinishRegistration } from "./finish.component";
import { ssrTranslation } from "@/shared/translation/index.ssr";
import { key, Namespace } from "@/shared/translation";

export default FinishRegistration;

export const getServerSideProps = async ({ locale }: { locale: string }) => {
    const { t, i18nSSRConfig } = await ssrTranslation(locale);
    return {
        props: {
            ...i18nSSRConfig,
            meta: {
                title: t(key(Namespace.service, "title"), { name: "Регистрация" }),
                tags: [
                    {
                        name: "title",
                        content: t(key(Namespace.service, "title"), { name: "Регистрация" }),
                        key: "title"
                    },
                ]
            }
        }
    };
};