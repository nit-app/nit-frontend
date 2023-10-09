import { LoginPostRequest, LoginPostResponse } from "./types";
import instance from "@/shared/api";

export function postLogin(data: LoginPostRequest) {
    return instance.post<LoginPostRequest, LoginPostResponse>("/login", data);
}