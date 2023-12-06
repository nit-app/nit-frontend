import { routesForUsers } from "./user/user";
import { routesForLogin } from "./login/login";
import { routesForRegistration } from "./registration/registration";
import { routesForEvent } from "@/other/mirage/endpoints/events/event";

const endpoints = {
    users: routesForUsers,
    login: routesForLogin,
    registration: routesForRegistration,
    event: routesForEvent,
};

export { endpoints };