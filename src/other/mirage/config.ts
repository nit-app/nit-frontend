import { createServer } from "miragejs";
import { faker } from "@faker-js/faker";
import { endpoints } from "./endpoints";
import { models } from "./models";
import { factories } from "./factories";

export function startMirage() {
    const server = createServer({
        models,
        factories,
        seeds(server) {
            server.createList("user", faker.number.int({ min: 10, max: 25 }));
            server.createList("event", faker.number.int({ min: 10, max: 25 }));
        },
    });
    server.logging = true;
    server.namespace = "";
    server.urlPrefix = "http://localhost:3000/v1";

    for (const namespace of Object.keys(endpoints)) {
        endpoints[namespace as keyof typeof endpoints](server);
    }

    server.passthrough();
}