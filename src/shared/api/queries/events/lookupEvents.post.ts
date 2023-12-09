import instance from "@/shared/api";
import { BaseResponse } from "@/shared/api/queries/types";
import { Event, FiltersPayload } from "./types";
import { AxiosResponse } from "axios";

// from this moment to the biggest date
export const defaultFilters = () => ({
    from: (new Date()).toISOString(),
    // one week
    to: (new Date(Number(new Date()) + 1000 * 60 * 60 * 24 * 7)).toISOString() });

export function lookupEvents(filters: FiltersPayload = defaultFilters()) {
    const query = () => instance
        .post<
            BaseResponse<Event[]>,
            AxiosResponse<BaseResponse<Event[]>>,
            FiltersPayload
        >("/events/lookup", filters)
        .then(response => response.data);
    const queryKey = ["events", filters.from, filters.to];

    return { query, queryKey };
}