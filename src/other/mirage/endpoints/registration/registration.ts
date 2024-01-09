import { Server, Response, Request } from "miragejs";
import { User } from "@/other/mirage/types";
import { faker } from "@faker-js/faker";

export function routesForRegistration(server: Server) {
    server.post("/registration", (schema, request: Request) => {
        if (schema.db.users.filter((user: User) => user.nickname === request.params.nickname).length > 0) {
            return new Response(400, {}, { message: "username is already registered" });
        }
        let newUser = JSON.parse(request.requestBody);
        newUser.id = faker.string.uuid();
        schema.create("user", newUser);
        return new Response(200, {}, { bearer: newUser.id });
    });
}