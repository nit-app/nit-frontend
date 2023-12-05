import { useMutation } from "@tanstack/react-query";
import { registrationFinish } from "@/shared/api/queries";


export function useRegistrationFinish() {
    const { mutateAsync, isLoading, isError } = useMutation(
        ["finish", "registration"],
        registrationFinish,
    );
    return { registrationFinish: mutateAsync, registrationFinishIsLoading: isLoading, registrationFinishIsError: isError };
}