async function getAllHelloMock() {
    return new Response(JSON.stringify([
        "hello 1", "hello 2", "hello 3"
    ]));
}

addEventListener("fetch", async (event) => {
    const request = event.request;
    switch ((new URL(request.url)).pathname) {
        case "/hello/all":
            return event.respondWith(getAllHelloMock(request));
    }
    return event.respondWith(fetch(request));
});
