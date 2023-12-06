import instance from "@/shared/api";
import { BaseResponse } from "@/shared/api/queries/types";
import { Event } from "./types";

export function getAllEvents() {
    const query = () => instance.get<BaseResponse<Event>>("/events/lookup").then(r => r.data);
    const queryKey = ["event", "all"];

    return { query, queryKey };
}