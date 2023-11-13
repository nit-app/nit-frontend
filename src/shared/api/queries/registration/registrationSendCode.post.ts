import instance from "@/shared/api";
import { BaseRespnonse, BaseSendCodeRequest } from "@/shared/api/queries/types";

export function registrationSendCode(phone: string) {
    const phoneWithoutMask = phone.match(/\d+/g)?.join("") as string;
    return instance.post<BaseSendCodeRequest, BaseRespnonse>("register/sendCode", { phoneNumber: phoneWithoutMask });
}