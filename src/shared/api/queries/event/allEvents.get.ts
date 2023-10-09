import instance from "@/shared/api";

export function getAllEvents() {
    const query = () => instance.get("/event/all").then(r => r.data?.events);
    const queryKey = ["event", "all"];

    return { query, queryKey };
}