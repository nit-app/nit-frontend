import { useMutation } from "@tanstack/react-query";
import { registrationSendCode } from "@/shared/api/queries";


export function useRegistrationSendCode() {
    const { mutateAsync, isLoading, isError, data } = useMutation(
        ["sendCode", "registration"],
        registrationSendCode,
    );

    return { response: data, registrationSendCode: mutateAsync, registrationSendCodeIsLoading: isLoading, registrationSendCodeIsError: isError };
}