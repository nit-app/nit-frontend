import * as styles from "./style.module.scss";
import { DateFilter } from "@/features/dateFilter";
import { TagFilter } from "@/features/tagFilter";
import { FiltersPayload } from "@/shared/api/queries/events/types";
import { SearchFilter } from "@/features/searchFilter";


interface FiltersProps {
    filters: FiltersPayload;
    setFilters: (filters: FiltersPayload) => void;
}

export function Filters({ filters, setFilters }: FiltersProps) {
    function onDateChange(from: string, to: string) {
        setFilters({ ...filters, from, to });
    }

    return (
        <div className={styles.filters}>
            <div className={styles.filterActions}>
                <DateFilter
                    from={filters.from}
                    to={filters.to}
                    setRange={onDateChange}/>
                <TagFilter/>
            </div>
            <div>
                <SearchFilter/>
            </div>
        </div>
    );
}