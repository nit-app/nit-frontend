import instance from "@/shared/api";
import { BaseResponse, BaseSendCodeRequest } from "@/shared/api/queries/types";

export function loginSendCode(phone: string) {
    const phoneWithoutMask = phone.match(/\d+/g)?.join("");
    return instance.post<BaseSendCodeRequest, BaseResponse<boolean>>("auth/sendCode", { phoneNumber: phoneWithoutMask });
}