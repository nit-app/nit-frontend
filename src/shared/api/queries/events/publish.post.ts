import instance from "@/shared/api";

import { EventRequest } from "./types";


export function publish(eventId: string) {
    return instance.post<EventRequest>(`/eventAdmin/publish/${eventId}`);
}
