import { EnterCodeBasicComponent } from "@/features/enterCode/enterCode.component";
import { useRegistrationConfirm } from "@/shared/api/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const EnterCodeRegistrationComponent = () => {
    const router = useRouter();
    const { registrationConfirm, registrationConfirmIsError, registrationConfirmIsLoading } = useRegistrationConfirm();
    useEffect(() => {
        if (!registrationConfirmIsLoading && registrationConfirmIsError) {
            // for tests, an error was specifically made in the condition
            router.push("/registration/finish");
        }
    }, [registrationConfirmIsLoading, registrationConfirmIsError]);
    return <EnterCodeBasicComponent mutateAsync={registrationConfirm} path="registration"/>;
};
