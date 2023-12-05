import instance from "@/shared/api";
import { BaseRespnonse, BaseSendCodeRequest } from "@/shared/api/queries/types";

export function loginSendCode(phone: string) {
    const phoneWithoutMask = phone.match(/\d+/g)?.join("") as string;
    return instance.post<BaseSendCodeRequest, BaseRespnonse>("auth/sendCode", { phoneNumber: phoneWithoutMask });
}