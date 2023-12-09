import * as styles from "./index.module.scss";
import { Filters, Header } from "@/widgets";
import { Gap } from "@/shared/ui/gap";
import { EventList } from "@/widgets/eventList/eventList.component";
import { defaultFilters } from "@/shared/api/queries";
import { useState } from "react";
import { FiltersPayload } from "@/shared/api/queries/events/types";


export function Index() {
    const [filters, setFilters] = useState({ all: defaultFilters() });

    function filtersSetter(name: string) {
        return (filters: FiltersPayload) => {
            setFilters(prev => ({ ...prev, [name]: filters }));
        };
    }

    return (
        <>
            <main className={styles.main}>
                <Header/>
                <Gap size="m"/>
                <Filters filters={filters["all"]} setFilters={filtersSetter("all")}/>
                <Gap size="m"/>
                <EventList link="#" title="На этой неделе" filters={filters["all"]}/>
            </main>
        </>
    );
}
