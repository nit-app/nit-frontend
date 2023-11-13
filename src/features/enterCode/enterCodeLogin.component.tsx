import { EnterCodeBasicComponent } from "@/features/enterCode/enterCode.component";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLoginConfirm } from "@/shared/api/hooks/login/useLoginConfirm";

export const EnterCodeLoginComponent = () => {
    const router = useRouter();
    const { loginConfirm, loginConfirmIsError, loginConfirmIsLoading } = useLoginConfirm();
    useEffect(() => {
        if (!loginConfirmIsLoading && loginConfirmIsError) {
            // for tests, an error was specifically made in the condition
            router.push("/");
        }
    }, [loginConfirmIsLoading, loginConfirmIsError]);
    return <EnterCodeBasicComponent mutateAsync={loginConfirm} path="login"/>;
};
