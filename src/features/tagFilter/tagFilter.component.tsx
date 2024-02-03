import { TagOutlined } from "@ant-design/icons";
import { Button, Input, Popover, Typography } from "@/shared/ui";
import * as styles from "./tagFilter.module.scss";
import { key, Namespace, useTranslation } from "@/shared/translation";
import { Badge, Tag } from "antd";
import { useEffect, useRef, useState } from "react";

const { Text } = Typography;

interface TagFilterProps {
    selected: string[];
    all: string[];
    onCheck: (tag: string) => void;
    onSearch: (term: string) => void;
}


export function TagFilter(props: TagFilterProps) {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation(Namespace.content);

    useEffect(() => {
        function listener(event) {
            const popoverElement = document.getElementsByClassName("ant-popover")?.[0];
            if (popoverRef.current && popoverElement && event.target) {
                if (
                    !popoverElement.contains(event.target) &&
                    !popoverRef.current.contains(event.target)
                ) setOpen(false);
            }
        }

        document.addEventListener("click", listener);
        return () => document.removeEventListener("click", listener);
    }, []);

    const popoverRef = useRef(null);

    return (
        <Popover
            content={<PopoverContent onSearch={props.onSearch} selected={props.selected} onCheck={props.onCheck}
                                     all={props.all}/>}
            trigger="click"
            placement="bottom"
            arrow={false}
            overlayClassName={styles.popoverContainer}
            open={open}
        >
            <Badge count={props.selected.length} showZero={false}>
                <Button
                    ref={popoverRef}
                    onClick={() => setOpen(p => !p)}
                >
                    {t("filters:tags")}<TagOutlined/>
                </Button>
            </Badge>
        </Popover>
    );
}

interface PopoverContentProps {
    selected: string[];
    all: string[];

    onSearch(term: string): void;

    onCheck(tag: string): void;
}

function PopoverContent(props: PopoverContentProps) {
    const { t } = useTranslation();
    return (
        <div className={styles.popoverContent}>
            <Input.Search onChange={(e) => props.onSearch(e.target.value)}
                          placeholder={t(key(Namespace.content, "search"))}/>
            <div className={styles.tagList}>
                {
                    props.all.map(t => (
                        <Tag.CheckableTag
                            checked={props.selected.includes(t)}
                            onClick={() => props.onCheck(t)}
                            key={t}
                        >{t.toUpperCase()}
                        </Tag.CheckableTag>
                    ))
                }
                {props.all.length < 1 && <Text>{t(key(Namespace.content, "nothingFound"))}</Text>}
            </div>
        </div>
    );
}