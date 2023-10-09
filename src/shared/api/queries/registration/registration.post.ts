import instance from "@/shared/api";
import { RegistrationPostRequest, RegistrationPostResponse } from "./types";

export function postRegistration(data: RegistrationPostRequest) {
    return instance.post<RegistrationPostRequest, RegistrationPostResponse>("/registration", { data });
}