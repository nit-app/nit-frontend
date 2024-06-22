import instance from "@/shared/api";

import { EventRequest } from "./types";


export function favAdd(eventId: string) {
    return instance.post<EventRequest>(`/events/fav/${eventId}/add`);
}

export function favRemove(eventId: string) {
    return instance.post<EventRequest>(`/events/fav/${eventId}/remove`);
}