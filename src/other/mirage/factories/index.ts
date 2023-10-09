import { userFactory } from "./user/user";
import { eventFactory } from "./event/event";

export * from "./user/user";

export const factories = {
    user: userFactory,
    event: eventFactory,
};