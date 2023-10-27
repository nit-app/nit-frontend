import { Server, Response } from "miragejs";
import { faker } from "@faker-js/faker";

export function routesForEvent(server: Server) {
    server.get("/event/all", (schema) => {
        const events = schema.all("event");
        const seconds = new Date().getSeconds();
        return seconds % 17 === 0
            ? new Response(401, {}, { error: true })
            : new Response(200, {}, events);
    });
    server.post("/event/create", (schema, request) => {
        let newEvent = JSON.parse(request.requestBody);
        newEvent.id = faker.string.uuid();
        schema.create("event", newEvent);
        return new Response(200, {}, { event: newEvent });
    });
}