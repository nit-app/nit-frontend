import { Response, Server } from "miragejs";
import { AppSchema, User } from "../../types";

export function routesForUsers(server: Server) {
    server.get(`/users`, (schema: AppSchema, request) => {
        const users = schema.all("user");
        const seconds = new Date().getSeconds();
        return seconds % 17 === 0
            ? new Response(401, {}, { error: true })
            : new Response(200, {}, users);
    });
    server.get("/users/:id", (schema: AppSchema, request) => {
        let user = schema.db.users.filter((user: User) => user.id === request.params.id);
        return user.length > 0 ? new Response(200, {}, ...user) : new Response(401, {}, { error: true });
    });
}