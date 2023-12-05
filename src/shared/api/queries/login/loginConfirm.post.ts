import instance from "@/shared/api";
import { BaseConfirmCodeRequest, BaseRespnonse } from "@/shared/api/queries/types";

export function loginConfirm(code: string) {
    return instance.post<BaseConfirmCodeRequest, BaseRespnonse>("auth/confirm", { code: code });
}