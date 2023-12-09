import { Server, Response } from "miragejs";
import { faker } from "@faker-js/faker";
import { FiltersPayload, Event } from "@/shared/api/queries/events/types";

export function routesForEvent(server: Server) {
    server.post("/events/lookup", async (schema, { requestBody }) => {
        const body = JSON.parse(requestBody) as FiltersPayload;
        let events = schema.where("event", event => {
            return (
                (Number(new Date(event.schedule[0].beginsAt)) >= Number(new Date(body.from))) &&
                (Number(new Date(event.schedule[0].endsAt)) <= Number(new Date(body.to)))
            );

        }).sort((a, b) => Number(new Date(a.schedule[0].beginsAt)) - Number(new Date(b.schedule[0].beginsAt)));

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