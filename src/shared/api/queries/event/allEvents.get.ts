import instance from "@/shared/api";
import { BaseResponse } from "@/shared/api/queries/types";
import { Event } from "./types";
import { AxiosResponse } from "axios";

export function getAllEvents() {
    const query = () => instance
        .get<BaseResponse<Event[]>, AxiosResponse<BaseResponse<Event[]>>>("/events/lookup")
        .then(response => response.data);
    const queryKey = ["event", "all"];

    return { query, queryKey };
}