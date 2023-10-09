export interface Event {
    id: string;
    title: string;
    description: string;
    date: Date;
}

export interface EventRequest extends Omit<Event, "id"> {
}

export interface GetAllEventsResponse {
    events: Event[];
}


