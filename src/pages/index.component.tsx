import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { Filters, Header, EventList } from "@/widgets";
import { Gap } from "@/shared/ui";
import { FiltersPayload, defaultFilters } from "@/shared/api/queries";

import styles from "./index.module.scss";
import { useRouter } from "next/router";


export function Index() {
    const params = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const { tags, to, from } = defaultFilters();
    const [filters, setFilters] = useState({
        all: {
            ...defaultFilters(),
            tags: params.get("tags")?.split(",") ?? tags,
            from: params.get("from") ?? from,
            to: params.get("to") ?? to,
        }
    });

    function filtersSetter(name: string) {
        return (filters: FiltersPayload) => {
            const newParams = new URLSearchParams(params.toString());
            if (filters.tags && filters.tags.filter(Boolean).length > 0)
                newParams.set("tags", filters.tags.join(","));
            else newParams.delete("tags");

            if (filters.from) newParams.set("from", filters.from);
            if (filters.to) newParams.set("to", filters.to);

            router.push(pathname + "?" + newParams.toString()).then(
                () => setFilters(prev => ({ ...prev, [name]: filters }))
            );
        };
    }

    return (
        <>
            <main className={styles.main}>
                <Header/>
                <Gap size="m"/>
                <Filters filters={filters["all"]} setFilters={filtersSetter("all")}/>
                <Gap size="m"/>
                <EventList link="#" title="Мероприятия" filters={filters["all"]}/>
            </main>
        </>
    );
}
