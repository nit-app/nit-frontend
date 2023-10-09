import { Factory } from "miragejs";
import { Event } from "@/other/mirage/types";
import { faker } from "@faker-js/faker";

export const eventFactory = Factory.extend<Event>({
    id() {
        return faker.string.uuid();
    },
    title() {
        return faker.word.words(1);
    },
    description() {
        return faker.word.words(100);
    },
    date() {
        return faker.date.anytime();
    },
});