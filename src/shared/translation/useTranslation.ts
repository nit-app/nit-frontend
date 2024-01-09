import { useTranslation as useNextTranslation } from "next-i18next";

export function useTranslation(ns?: string) {
    return useNextTranslation(ns);
}
