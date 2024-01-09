import { Factory } from "miragejs";
import { Event } from "@/shared/api/queries/events/types";
import { faker } from "@faker-js/faker";

faker.seed(15);

export const eventFactory = Factory.extend<Event>({
    uuid() {
        return faker.string.uuid();
    },
    title() {
        return faker.word.words(10);
    },
    priceLow() {
        return faker.number.int({ min: 100, max: 2000 });
    },
    priceHigh() {
        return faker.number.int({ min: 2000, max: 2500 });

    },
    ageLimitLow() {
        return faker.helpers.arrayElement([0, 6]);
    },
    ageLimitHigh() {
        return faker.helpers.arrayElement([0, 18]);
    },
    location() {
        return faker.helpers.arrayElement([
            "Екатеринбург, Россия ул. Куйбышева, д. 44",
            "Екатеринбург, Россия",
            "Екатеринбург, Россия г. Екатеринбург, ул. Бориса Ельцина, 8"
        ]);
    },
    ownerInfo() {
        return faker.helpers.arrayElement(["ООО Тестовые Решения"]);
    },
    hasCertificate() {
        return faker.helpers.arrayElement([true, false]);
    },
    favCount() {
        return faker.number.int({ min: 0, max: 30 });
    },
    createdAt() {
        return faker.date.between({ to: new Date(), from: new Date(2023, 1, 1) }).toString();
    },
    modifiedAt() {
        return faker.date.between({ to: new Date(), from: new Date(2023, 1, 1) }).toString();
    },
    schedule() {
        return [
            {
                scheduleUUID: faker.string.uuid(),
                beginsAt: faker.date.between({
                    from: Number(new Date() - 1000 * 60 * 60 * 24 * 5),
                    to: Number(new Date()) + 1000 * 60 * 60 * 24 * 15
                }).toString(),
                endsAt: faker.date.between({
                    from: Number(new Date()) + 1000 * 60 * 60 * 24 * 15,
                    to: Number(new Date()) + 1000* 60 * 60 * 24 * 17
                }).toString(),
                addedAt: ""
            }
        ];
    },
    tags() {
        const nouns = new Array(100).fill(0).map(() => faker.word.noun(1));
        return faker.helpers.arrayElements(nouns, { min: 0, max: 15 });
    },
    description() {
        return faker.word.words({ count: faker.number.int({ min: 30, max: 100 }) });
    }
});