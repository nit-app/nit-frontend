import { Event } from "@/shared/api/queries";
import { useMutation } from "@tanstack/react-query";
import { useQueriesInvalidator } from "@/shared/hooks";
import { favAdd, favRemove } from "@/shared/api/queries/events/fav.post";
import { lookupFav } from "@/shared/api/queries/events/favs.get";

export function useToggleFav(favIds: string[]) {
    const { queryKey } = lookupFav();
    const queriesInvalidator = useQueriesInvalidator(queryKey);
    const { mutateAsync: addFav, isLoading: isAddLoading } = useMutation(
        favAdd, { onSuccess: queriesInvalidator }
    );

    const { mutateAsync: removeFav, isLoading: isRemoveLoading } = useMutation(
        favRemove, { onSuccess: queriesInvalidator }
    );

    const toggleFav = async (event: Event) => {
        if (favIds.includes(event.uuid)) {
            await removeFav(event.uuid);
        } else {
            await addFav(event.uuid);
        }
    };

    return { toggleFav, isLoading: isAddLoading || isRemoveLoading };
}
