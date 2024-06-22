import { BaseResponse } from "@/shared/api/queries";

const tags = ["иб", "ит", "кии", "киберучения", "митап", "devops", "регуляторы", "воркшоп", "лекция"];

export function searchTags(searchTerm: string) {
    // const query = () => instance
    //     .get<
    //         BaseResponse<Event>,
    //         AxiosResponse<BaseResponse<Array<string>>>
    //     >(`/tags/search/${searchTerm}`)
    //     .then(response => response.data);

    const query = () => new Promise<BaseResponse<Array<string>>>((resolve) => {
        const response: BaseResponse<Array<string>> = {
            timestamp: new Date().toISOString(),
            object: tags.filter(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),
            status: 200
        };
        setTimeout(() => resolve(response), 1000);

    });
    const queryKey = ["tags", searchTerm];

    return { query, queryKey };
}