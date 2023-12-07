import instance from "@/shared/api";
import { BaseResponse } from "@/shared/api/queries/types";
import { Event, FiltersPayload } from "./types";
import { AxiosResponse } from "axios";

// from this moment to the biggest date
export const defaultFilters = () => ({ from: (new Date()).toISOString(), to: "+275760-09-13T00:00:00.000Z" });

export function lookupEvents(filters: FiltersPayload = defaultFilters()) {
    const query = () => instance
        .post<
            BaseResponse<Event[]>,
            AxiosResponse<BaseResponse<Event[]>>,
            FiltersPayload
        >("/events/lookup", filters)
        .then(response => response.data);
    const queryKey = ["event", "all"];

    return { query, queryKey };
}