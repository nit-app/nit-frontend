// eslint-disable-next-line import/no-unresolved
import { Model } from "miragejs";
import { Event } from "@/shared/api/queries/events/types";

export const EventModel = Model.extend<Event>({} as any);