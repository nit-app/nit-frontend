import { AxiosResponse } from "axios";

import instance from "@/shared/api";
import { BaseResponse } from "@/shared/api/queries";

export function getMe() {
    const query = () => instance
        .get<
            BaseResponse<string>,
            AxiosResponse<BaseResponse<string>>
        >("/getMe")
        .then(response => response.data)
        .catch(() => false);
    const queryKey = ["me"];

    return { query, queryKey };
}