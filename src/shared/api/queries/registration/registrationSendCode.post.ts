import instance from "@/shared/api";
import { BaseResponse, BaseSendCodeRequest } from "@/shared/api/queries/types";

export function registrationSendCode(phone: string) {
    const phoneWithoutMask = phone.match(/\d+/g)?.join("");
    return instance.post<BaseSendCodeRequest, BaseResponse<boolean>>("register/sendCode", { phoneNumber: phoneWithoutMask });
}