import { EnterCodeBasicComponent } from "@/features/enterCode/enterCode.component";
import { useLoginConfirm } from "@/shared/api/hooks/login/useLoginConfirm";

export const EnterCodeLoginComponent = () => {
    const { loginConfirm, loginConfirmIsLoading } = useLoginConfirm();
    const onSubmit = async (code: string) => {
        return loginConfirm(code)
            .then(() => {
                window.location.href = "/";
            })
            .catch(e => e);
    };
    return <EnterCodeBasicComponent loading={loginConfirmIsLoading} onSubmit={onSubmit} path="login"/>;
};
