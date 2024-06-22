import instance from "@/shared/api";
import { Event } from "@/shared/api/queries/events/types";
import { BaseResponse } from "@/shared/api/queries";


export async function createEvent(event: Event) {
    const { schedule, ...plainEvent } = event;
    const createdEvent = await instance.post<BaseResponse<Event>>("/eventAdmin/create", { ...plainEvent });
    instance.post("/eventAdmin/setSchedule", { eventUuid: createdEvent.data.object.uuid, schedule });
}
