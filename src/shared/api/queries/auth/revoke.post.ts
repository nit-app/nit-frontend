import instance from "@/shared/api";
import { BaseResponse } from "@/shared/api/queries/types";
import { Event } from "@/shared/api/queries/events/types";
import { AxiosResponse } from "axios";

export async function revoke() {
    await instance
        .get<
            BaseResponse<Event>,
            AxiosResponse<BaseResponse<Event>>
        >("/auth/revoke");
}
