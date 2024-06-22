import { AxiosResponse } from "axios";

import instance from "@/shared/api";
import { BaseResponse } from "@/shared/api/queries";
import { User } from "./types";

export function getMe() {
    const query = () => instance
        .get<
            BaseResponse<User>,
            AxiosResponse<BaseResponse<User>>
        >("/getMe")
        .then(response => response.data)
        .catch(() => undefined);
    const queryKey = ["me"];

    return { query, queryKey };
}