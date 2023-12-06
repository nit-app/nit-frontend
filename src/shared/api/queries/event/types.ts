export interface Event {
    uuid: string;
    title: string;
    priceLow: number;
    priceHigh: number;
    ageLimitLow: number;
    ageLimitHigh: number;
    location: string;
    ownerInfo: string;
    hasCertificate: boolean;
    favCount: number;
    createdAt: string;
    modifiedAt: string;
    schedule: Schedule[]
    tags: string[]
}


interface Schedule {
    scheduleUUID: string;
    beginsAt: string;
    endsAt: string;
    addedAt: string;
}

export interface EventRequest extends Omit<Event, "id"> {
}

export interface GetAllEventsResponse {
    events: Event[];
}


