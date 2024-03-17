import styles from "./style.module.scss";
import { DateFilter } from "@/features/dateFilter";
import { TagFilter } from "@/features/tagFilter";
import { FiltersPayload } from "@/shared/api/queries/events/types";
import { useState } from "react";
import { useSearchTags } from "@/shared/api/hooks";


interface FiltersProps {
    filters: FiltersPayload;
    setFilters: (filters: FiltersPayload) => void;
}


export function Filters({ filters, setFilters }: FiltersProps) {
    const [tagSearchTerm, setTagSearchTerm] = useState("");

    const { tags, isTagsLoading } = useSearchTags(tagSearchTerm);

    function onDateChange(from: string, to: string) {
        setFilters({ ...filters, from, to });
    }

    function onTagCheck(tag: string) {
        const { tags, ...other } = filters;
        if (!tags)
            return setFilters({ ...other, tags: [tag] });
        if (tags.includes(tag)) {
            if (tags.length > 1)
                return setFilters({ ...other, tags: tags.filter(t => t !== tag) });
            return setFilters({ ...other });
        }
        return setFilters({ ...other, tags: [...(tags ?? []), tag] });
    }

    return (
        <div className={styles.filters}>
            <div className={styles.filterActions}>
                <DateFilter
                    from={filters.from}
                    to={filters.to}
                    setRange={onDateChange}/>
                <TagFilter
                    searching={isTagsLoading}
                    onSearch={setTagSearchTerm}
                    onCheck={onTagCheck}
                    selected={filters?.tags ?? []}
                    all={tags}/>
            </div>

        </div>
    );
}