import instance from "@/shared/api";
import { BaseResponse } from "@/shared/api/queries/types";
import { Event } from "@/shared/api/queries/events/types";
import { AxiosResponse } from "axios";

export function lookupFav() {
    const query = () => instance
        .get<
            BaseResponse<Event[]>,
            AxiosResponse<BaseResponse<Event[]>>
        >("/events/fav")
        .then(response => response.data);
    const queryKey = ["events_fav"];

    return { query, queryKey };
}