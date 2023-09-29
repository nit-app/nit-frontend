import React from "react";
import type { AppProps as NextAppProps } from "next/app";
import Head from "next/head";

import { DefaultTags } from "@/shared/seo";
import { appWithTranslation, useTranslation } from "@/shared/translation";
import "@/shared/styles/globals.css";

import { AppProps } from "./_app.types";


function App({ Component, ...props }: NextAppProps<AppProps>) {
    const { pageProps } = props;
    const { t } = useTranslation();
    const meta = pageProps.meta?.tags || [];
    const title = pageProps.meta?.title || t("INDEX_SERVICE_TITLE");

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                {...DefaultTags}
                {meta && meta.map(prop => <meta {...prop} key={prop.key}/>)}
                <title key="title">{title}</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default appWithTranslation(App);