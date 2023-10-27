// eslint-disable-next-line import/no-unresolved
import Schema from "miragejs/orm/schema";
import { Registry } from "miragejs";

import { models } from "./models";
import { factories } from "./factories";

type AppRegistry = Registry<typeof models, typeof factories>
export type AppSchema = Schema<AppRegistry>
export type User = {
    id: string;
    nickname: string;
    firstName: string;
    lastName: string;
    password: string;
    age: number;
    sex: string;
}
export type Event = {
    id: string;
    title: string;
    description: string;
    date: Date;
}