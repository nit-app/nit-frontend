import { useTranslation, key, Namespace } from "@/shared/translation";
import { useGetAllHello } from "@/shared/api/hooks";
import { List, Typography } from "antd";


const { Text, Title } = Typography;

export function Index() {
    const { t } = useTranslation();
    const { allHello, allHelloLoading, allHelloError } = useGetAllHello();
    const allHelloLoaded = !allHelloLoading && !allHelloError;
    return (
        <>
            <main>
                <Title>{t(key(Namespace.content, "hello"), ".")}</Title>
                <List loading={allHelloLoading}>
                    {
                        allHelloLoaded && allHello.map((hello) => (
                                <List.Item key={hello}><Text>{hello}</Text></List.Item>
                            )
                        )
                    }
                </List>
            </main>
        </>
    );
}


