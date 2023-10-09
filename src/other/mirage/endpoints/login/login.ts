import { Server, Response, Request } from "miragejs";
import { User } from "@/other/mirage/types";
import { faker } from "@faker-js/faker";

export function routesForLogin(server: Server) {
    server.post("/login", (schema, request: Request) => {
        let user = schema.db.users.filter((user: User) => user.password === request.params.password && user.nickname === request.params.nickname);
        return user.length > 0 ? new Response(200, {}, { bearer: faker.string.uuid() }) : new Response(400);
    });
}