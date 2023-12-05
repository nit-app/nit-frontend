import { BaseRespnonse, BaseConfirmCodeRequest } from "@/shared/api/queries/types";
import instance from "@/shared/api";

export function registrationConfirm(code: string) {
    return instance.post<BaseConfirmCodeRequest, BaseRespnonse>("register/confirm", { code: code });
}