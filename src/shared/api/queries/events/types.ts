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
    schedule: Schedule[];
    tags: string[];
    description: string;
}


interface Schedule {
    scheduleUUID: string;
    beginsAt: string;
    endsAt: string;
    addedAt: string;
}

export interface EventRequest extends Omit<Event, "id"> {
}


/**
 * Interface for lookup events
 *
 * @property from
 * date ISO format, `new Date().toISOString()`
 *
 * ---
 * @property to
 * date ISO format, `new Date().toISOString()`
 *
 * ---
 * @property excludeAgeRestricted
 * exclude 18+ events
 */

export interface FiltersPayload {
    from: string;
    to: string;
    tags?: string[];
    excludeAgeRestricted?: boolean;
    excludePaid?: boolean;
}