import React, { PropsWithChildren } from "react";
import type { AppProps as NextAppProps } from "next/app";
import Head from "next/head";
import { QueryClientProvider } from "@tanstack/react-query";

import { DefaultTags } from "@/shared/seo";
import { appWithTranslation, key, Namespace, useTranslation } from "@/shared/translation";
import "@/shared/styles/global.scss";
import { AppProps } from "./_app.types";
import { queryClient } from "@/shared/api/hooks";
import { startMirage } from "@/other/mirage/config";
import { ConfigProvider } from "antd";


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
        <ThemeConfig>
            <Head>
                <meta charSet="utf-8"/>
                {...DefaultTags}
                {meta && meta.map(prop => <meta {...prop} key={prop.key}/>)}
                <title key="title">{title}</title>
            </Head>

            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </ThemeConfig>
    );
}

function ThemeConfig(props: PropsWithChildren) {
    return (
        <ConfigProvider theme={{
            token: {
                fontSize: 16,
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.5,
                controlHeight: 40,
                colorPrimary: "#1677ff",
                colorFillSecondary: "#a2c9ff",
                colorPrimaryBg: "#e8f1ff",
                colorPrimaryBorder: "#e8f1ff",
                colorPrimaryHover: "#005de0",
                // colorhover: "#0048ad",
                colorPrimaryBgHover: "#00337a",
                colorPrimaryText: "#011127",
                colorTextSecondary: "#808893",
                colorIcon: "#cccfd4",
                colorBorder: "#e8f1ff",
                colorBgBase: "#e8f1ff",
                colorSuccess: "#30db32",
                colorSuccessBg: "#c1f4c2",
                colorWarning: "#fccc2d",
                colorWarningBg: "#fef0c0",
                colorError: "#ef3c29",
                colorErrorBg: "#fac5bf",
            },
            components: {
                Button: {
                    borderRadius: 8,
                    lineWidth: 2,
                },
                Typography: {
                    titleMarginBottom: 0,
                    titleMarginTop: 0,
                    margin: 0,
                    fontSizeHeading4: 18,
                    fontSizeHeading3: 26,
                },
                Input: {
                    lineWidth: 2,
                }
            }
        }}>
            {props.children}
        </ConfigProvider>
    );
}

export default appWithTranslation(App);