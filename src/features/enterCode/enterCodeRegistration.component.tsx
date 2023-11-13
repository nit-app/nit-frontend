import { EnterCodeBasicComponent } from "@/features/enterCode/enterCode.component";
import { useRegistrationConfirm } from "@/shared/api/hooks";
import { useRouter } from "next/router";

export const EnterCodeRegistrationComponent = () => {
    const router = useRouter();
    const { registrationConfirm, registrationConfirmIsLoading } = useRegistrationConfirm();
    const onSubmit = async (code: string) => {
        return registrationConfirm(code)
            .then(() => router.push("/registration/finish"))
            .catch(e => e);
    };

    return <EnterCodeBasicComponent onSubmit={onSubmit} loading={registrationConfirmIsLoading} path="registration"/>;
};
