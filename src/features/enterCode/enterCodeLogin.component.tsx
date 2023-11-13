import { EnterCodeBasicComponent } from "@/features/enterCode/enterCode.component";
import { useRouter } from "next/router";
import { useLoginConfirm } from "@/shared/api/hooks/login/useLoginConfirm";

export const EnterCodeLoginComponent = () => {
    const router = useRouter();
    const { loginConfirm, loginConfirmIsError, loginConfirmIsLoading } = useLoginConfirm();
    const onSubmit = async (code: string) => {
        return loginConfirm(code)
            .then(() => router.push("/"))
            .catch(e => e);
    };
    return <EnterCodeBasicComponent loading={loginConfirmIsLoading} onSubmit={onSubmit} path="login"/>;
};
