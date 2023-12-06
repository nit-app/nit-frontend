export type BaseResponse<T> = {
    timestamp: string;
    object: T;
    status: number;
}

export type BaseSendCodeRequest = {
    phoneNumber: string;
}

export type BaseConfirmCodeRequest = {
    code: string;
}