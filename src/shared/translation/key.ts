import { Namespace } from "@/shared/translation/namespace";


export function key(ns: Namespace, value: string) {
    return `${ns}.${value}`;
}