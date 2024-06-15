import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";

function _Document() {
    return (
        <Html lang="ru">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
            <Head/>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}

_Document.getInitialProps = async (ctx: DocumentContext) => {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => (
                <StyleProvider cache={cache}>
                    <App {...props} />
                </StyleProvider>
            ),
        });

    const initialProps = await Document.getInitialProps(ctx);
    const style = extractStyle(cache, true);
    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                <style dangerouslySetInnerHTML={{ __html: style }}/>
            </>
        ),
    };
};

export default _Document;
