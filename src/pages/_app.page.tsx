import React from "react";
import type { AppProps as NextAppProps } from "next/app";
import Head from "next/head";
import { QueryClientProvider } from "@tanstack/react-query";

import { DefaultTags } from "@/shared/seo";
import { appWithTranslation, key, Namespace, useTranslation } from "@/shared/translation";
import "@/shared/styles/globals.css";

import { AppProps } from "./_app.types";
import { startMirage } from "@/other/mirage/config";
import { queryClient } from "@/shared/api/hooks";

startMirage();

function App({ Component, ...props }: NextAppProps<AppProps>) {
    const { pageProps } = props;
    const { t } = useTranslation();
    const meta = pageProps.meta?.tags || [];
    const title = pageProps.meta?.title || t(key(Namespace.service, "title"));
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                {...DefaultTags}
                {meta && meta.map(prop => <meta {...prop} key={prop.key}/>)}
                <title key="title">{title}</title>
            </Head>

            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </>
    );
}

export default appWithTranslation(App);