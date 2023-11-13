import { useMutation } from "@tanstack/react-query";
import { registrationSendCode } from "@/shared/api/queries";


export function useRegistrationSendCode() {
    const { mutateAsync, isLoading, isError } = useMutation(
        ["sendCode", "registration"],
        registrationSendCode,
    );
    return { registrationSendCode: mutateAsync, registrationSendCodeIsLoading: isLoading, registrationSendCodeIsError: isError };
}