import { useQuery } from "@tanstack/react-query";

import { getAllHello } from "@/shared/api/queries";


export function useGetAllHello() {
    const { query, queryKey } = getAllHello();

    const { data = [], isLoading, isError } = useQuery(queryKey, query);

    return { allHello: data, allHelloLoading: isLoading, allHelloError: isError };
}
