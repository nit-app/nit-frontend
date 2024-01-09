export type BaseResponse<Object> = {
    timestamp: string;
    object: Object;
    status: number;
}

export type BaseSendCodeRequest = {
    phoneNumber: string;
}

export type BaseConfirmCodeRequest = {
    code: string;
}