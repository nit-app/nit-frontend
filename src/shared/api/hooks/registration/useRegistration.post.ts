import { useMutation } from "@tanstack/react-query";
import { postRegistration } from "@/shared/api/queries/registration";


export function usePostRegistration() {
    const { mutateAsync, isLoading, isError } = useMutation(
        postRegistration, { onSuccess: (data) => data.bearer }
    );
    return { postRegistration: mutateAsync, postRegistrationLoading: isLoading, postRegistrationError: isError };
}