import instance from "@/shared/api";
import { BaseResponse } from "@/shared/api/queries/types";
import { Event } from "@/shared/api/queries/events/types";
import { AxiosResponse } from "axios";

export function lookupEvent(id: string) {
    const query = () => instance
        .get<
            BaseResponse<Event>,
            AxiosResponse<BaseResponse<Event>>
        >(`/events/get/${id}`)
        .then(response => response.data);
    const queryKey = ["events", id];

    return { query, queryKey };
}