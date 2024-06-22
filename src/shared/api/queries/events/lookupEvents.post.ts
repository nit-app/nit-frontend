import instance from "@/shared/api";
import { BaseResponse } from "@/shared/api/queries/types";
import { Event, FiltersPayload } from "./types";
import { AxiosResponse } from "axios";

// from this moment to the biggest date
export const defaultFilters = () => ({
    tags: [],
    from: (new Date()).toISOString(),
    // 40 days
    to: (new Date(Number(new Date()) + 1000 * 60 * 60 * 24 * 40)).toISOString() });

export function lookupEvents(filters: FiltersPayload = defaultFilters()) {
    const query = () => instance
        .post<
            BaseResponse<Event[]>,
            AxiosResponse<BaseResponse<Event[]>>,
            FiltersPayload
        >("/events/lookup", filters)
        .then(response => response.data);
    const queryKey = ["events", filters.from, filters.to, (filters.tags ?? []).join(";")];

    return { query, queryKey };
}


