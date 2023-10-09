export interface RegistrationPostRequest {
    nickname: string;
    firstName: string;
    lastName: string;
    password: string;
    age: number;
    sex: string;
}

export interface RegistrationPostResponse {
    bearer: string;
}