import instance from "@/shared/api";

import { GetAllHelloResponse } from "./types";


export function getAllHello() {
    const query = () => instance.get<GetAllHelloResponse>("/hello/all").then(r => r.data);
    const queryKey = ["hello", "all"];

    return { query, queryKey };
}