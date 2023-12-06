import React from "react";
import type { AppProps as NextAppProps } from "next/app";
import Head from "next/head";
import { QueryClientProvider } from "@tanstack/react-query";

import { DefaultTags } from "@/shared/seo";
import { appWithTranslation, key, Namespace, useTranslation } from "@/shared/translation";
import "@/shared/styles/globals.scss";
import { AppProps } from "./_app.types";
import { queryClient } from "@/shared/api/hooks";
import { startMirage } from "@/other/mirage/config";
import { ConfigProvider } from "antd";


console.log(process.env.Mode);
if (process.env.NEXT_PUBLIC_MODE === "debug") {
    console.log("------ DEBUG MODE ------");
    startMirage();
}

function App({ Component, ...props }: NextAppProps<AppProps>) {
    const { pageProps } = props;
    const { t } = useTranslation();
    const meta = pageProps.meta?.tags || [];
    const title = pageProps.meta?.title || t(key(Namespace.service, "title"));
    return (
        <ConfigProvider theme={{
            token: {
                fontSize: 16,
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.5,
                controlHeight: 40,
            },
            components: {
                Button: {
                    borderRadius: 8,
                }
            }
        }}>
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
        </ConfigProvider>
    );
}

export default appWithTranslation(App);