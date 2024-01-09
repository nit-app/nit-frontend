declare module "next-i18next/dist/commonjs/createClient" {
    import { i18n as I18NextClient } from "i18next";
    import { SSRConfig } from "next-i18next";
    type Result = {
        i18n: I18NextClient,
        initPromise: Promise<I18NextClient["t"]>
    }
    export default function createClient(config: SSRConfig): Result;
}