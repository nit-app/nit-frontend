import instance from "@/shared/api";
import { BaseConfirmCodeRequest, BaseResponse } from "@/shared/api/queries/types";

export function loginConfirm(code: string) {
    return instance.post<BaseConfirmCodeRequest, BaseResponse<boolean>>("auth/confirm", { code: code });
}