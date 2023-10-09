import instance from "@/shared/api";

import { EventRequest } from "./types";


export function postCreateEvent(event: EventRequest) {
    return instance.post<EventRequest>("/event/create", { event });
}