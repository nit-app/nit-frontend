import styles from "./style.module.scss";
import { DateFilter } from "@/features/dateFilter";
import { TagFilter } from "@/features/tagFilter";
import { FiltersPayload } from "@/shared/api/queries/events/types";
import { SearchFilter } from "@/features/searchFilter";


interface FiltersProps {
    filters: FiltersPayload;
    setFilters: (filters: FiltersPayload) => void;
}
const tags = ["иб", "ит", "кии", "киберучения", "митап", "devops", "регуляторы", "воркшоп", "лекция"];

export function Filters({ filters, setFilters }: FiltersProps) {
    function onDateChange(from: string, to: string) {
        setFilters({ ...filters, from, to });
    }

    function onTagCheck(tag: string) {
        if (filters.tags && filters.tags.includes(tag)) {
            setFilters({ ...filters, tags: filters.tags.filter(t => t !== tag) });
        } else {
            setFilters({ ...filters, tags: [...(filters.tags ?? []), tag] });
        }
    }

    return (
        <div className={styles.filters}>
            <div className={styles.filterActions}>
                <DateFilter
                    from={filters.from}
                    to={filters.to}
                    setRange={onDateChange}/>
                <TagFilter onCheck={onTagCheck} selected={filters?.tags ?? []} all={tags}/>
            </div>

        </div>
    );
}