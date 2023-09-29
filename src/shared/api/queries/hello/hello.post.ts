import instance from "@/shared/api";

import { Hello, PostHelloRequest } from "./types";


export function postHello(hello: Hello) {
    return instance.post<PostHelloRequest>("/hello/create", { hello });
}