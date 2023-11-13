export type BaseRespnonse = {
    timestamp: string;
    object: boolean;
    status: number;
}

export type BaseSendCodeRequest = {
    phoneNumber: string;
}

export type BaseConfirmCodeRequest = {
    code: string;
}