import { Server, Response } from "miragejs";
import { faker } from "@faker-js/faker";

export function routesForEvent(server: Server) {
    server.post("/events/lookup", async (schema) => {
        const events = schema.all("event");
        const seconds = new Date().getSeconds();

        await new Promise((resolve) => setTimeout(resolve, Math.random() * 100));

        return seconds % 17 === 0
            ? new Response(401, {}, { error: true })
            : new Response(200, {}, { timestamp: new Date().toString(), object: events.models, status: 200 });
    });
    server.post("/event/create", (schema, request) => {
        let newEvent = JSON.parse(request.requestBody);
        newEvent.id = faker.string.uuid();
        schema.create("event", newEvent);
        return new Response(200, {}, { event: newEvent });
    });
}