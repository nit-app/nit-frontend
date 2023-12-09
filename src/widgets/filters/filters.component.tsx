import { SearchOutlined } from "@ant-design/icons";
import { Input } from "@/shared/ui/input";
import * as styles from "./style.module.scss";
import { DateFilter } from "@/features/dateFilter";
import { TagFilter } from "@/features/tagFilter";
import { FiltersPayload } from "@/shared/api/queries/events/types";


interface FiltersProps {
    filters: FiltersPayload;
    setFilters: (filters: FiltersPayload) => void;
}

export function Filters({ filters, setFilters }: FiltersProps) {
    return (
        <div className={styles.filters}>
            <div className={styles.filterActions}>
                <DateFilter
                    from={filters.from}
                    to={filters.to}
                    setRange={(from, to) => {
                        console.log(from, to);
                        setFilters({ ...filters, from, to });
                    }}/>
                <TagFilter/>
            </div>
            <div>
                {/* TODO create feature and replace hardcoded words to i18n */}
                <Input placeholder="Поиск" style={{ width: "360px" }} prefix={<SearchOutlined/>}></Input>
            </div>
        </div>
    );
}