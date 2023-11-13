import { useMutation } from "@tanstack/react-query";
import { registrationConfirm } from "@/shared/api/queries";


export function useRegistrationConfirm() {
    const { mutateAsync, isLoading, isError } = useMutation(
        ["confirmCode", "registration"],
        registrationConfirm,
    );
    return {
        registrationConfirm: mutateAsync,
        registrationConfirmIsLoading: isLoading,
        registrationConfirmIsError: isError
    };
}