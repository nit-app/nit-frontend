import { Factory } from "miragejs";
import { Event } from "@/shared/api/queries/event/types";
import { faker } from "@faker-js/faker";

export const eventFactory = Factory.extend<Event>({
    uuid() {
        return faker.string.uuid();
    },
    title() {
        return faker.word.words(1);
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
            "56.822523, 60.605641 улица Декабристов, 77Б, Екатеринбург, Свердловская область, 620063"
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
                beginsAt: faker.date.between({ from: new Date(), to: Number(new Date()) + 10 ** 6 }).toString(),
                endsAt: faker.date.between({
                    from: Number(new Date()) + 10 ** 6,
                    to: Number(new Date()) + 10 ** 10
                }).toString(),
                addedAt: ""
            }
        ];
    },
    tags() {
        return faker.helpers.arrayElements(new Array(faker.number.int({
            min: 1,
            max: 10
        })).map(() => faker.word.words(1)));
    }
});