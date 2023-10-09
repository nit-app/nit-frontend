export interface LoginPostRequest {
    nickname: string;
    password: string;
}

export interface LoginPostResponse {
    bearer: string;
}