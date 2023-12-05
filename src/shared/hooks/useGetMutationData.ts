import { useEffect, useState } from "react";
import { queryClient } from "@/shared/api/hooks";

function arraysContainSame(originalKeysArray: string[], insertKeysArray: string[]) {
    originalKeysArray = Array.isArray(originalKeysArray) ? originalKeysArray : [];
    insertKeysArray = Array.isArray(insertKeysArray) ? insertKeysArray : [];
    return originalKeysArray.length === insertKeysArray.length && originalKeysArray.every(el => insertKeysArray.includes(el));
}

export const useMutationFromKey = (mutationKeys: string[]) => {
    const [mutateState, setMutateState] = useState<any>();
    useEffect(() => {
        queryClient.getMutationCache().subscribe(({ type, mutation }) => {
            if (
                type === "updated" &&
                arraysContainSame(mutation.options.mutationKey as string[], mutationKeys)
            ) {
                setMutateState(mutation?.state);
            }
        });
    }, []);
    return { mutateState };
};