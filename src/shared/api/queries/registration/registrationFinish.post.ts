import { BaseRespnonse } from "@/shared/api/queries/types";
import { RegistrationFinishRequest } from "@/shared/api/queries/registration/types";
import instance from "@/shared/api";

export function registrationFinish(data: RegistrationFinishRequest) {
    return instance.post<RegistrationFinishRequest, BaseRespnonse>("register/finish", data);
}