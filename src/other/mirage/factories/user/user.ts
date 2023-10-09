import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";
import { User } from "../../types";

export const userFactory = Factory.extend<User>({
    nickname() {
        return faker.internet.userName();
    },
    id() {
        return faker.string.uuid();
    },
    firstName() {
        return faker.person.firstName();
    },
    lastName() {
        return faker.person.lastName();
    },
    password() {
        return faker.internet.password();
    },
    age() {
        return faker.number.int({ min: 16, max: 100 });
    },
    sex() {
        return faker.person.sex();
    }
});