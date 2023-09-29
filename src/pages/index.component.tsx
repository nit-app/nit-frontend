import { useTranslation, key, Namespace } from "@/shared/translation";
import { useGetAllHello } from "@/shared/api/hooks";


export function Index() {
    const { t } = useTranslation();
    const { allHello, allHelloLoading, allHelloError } = useGetAllHello();
    const allHelloLoaded = !allHelloLoading && !allHelloError;
    return (
        <>
            <main>
                {t(key(Namespace.content, "hello"), ".")}
                {
                    allHelloLoaded && allHello.map((hello) => (
                        <p key={hello}>{hello}</p>
                        )
                    )
                }
            </main>
        </>
    );
}


