import instance from "@/shared/api";
import { BaseResponse } from "@/shared/api/queries/types";
import { Draft } from "./types";

export function lookupDrafts() {
    const query = () => instance
        .get<BaseResponse<Draft[]>>("/eventAdmin/drafts")
        .then(response => response.data);
    const queryKey = ["drafts"];

    return { query, queryKey };
}


