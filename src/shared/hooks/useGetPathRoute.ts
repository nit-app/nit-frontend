import { NextRouter } from "next/router";

interface UseGetPathRouteProps {
    depth?: number;
    router: NextRouter;
}

export function useGetPathRoute({ depth, router }: UseGetPathRouteProps) {
    return router.asPath.split("/")[depth || 1]?.split("?")[0]?.split("#")[0];
}