import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import createClient from "next-i18next/dist/commonjs/createClient";


export async function ssrTranslation(locale: string, namespaces?: string[]) {
    const i18nSSRConfig = await serverSideTranslations(locale, namespaces);
    const { i18n, initPromise } = createClient({ ...i18nSSRConfig });
    await initPromise;

    if (!i18n?.t) {
        throw new Error("i18n can't init");
    }
    return {
        i18nSSRConfig,
        t: i18n.t
    };
}