import { TagOutlined } from "@ant-design/icons";
import { Button, Popover } from "@/shared/ui";
import { Namespace, useTranslation } from "@/shared/translation";
import { Tag } from "antd";
import { useEffect, useRef, useState } from "react";

interface TagFilterProps {
    selected: string[];
    all: string[];
    onCheck: (tag: string) => void;
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
            content={<PopoverContent selected={props.selected} onCheck={props.onCheck} all={props.all} />}
            title="Выберите теги"
            trigger="click"
            open={open}
        >
            <Button ref={popoverRef} onClick={() => setOpen(p => !p)}>{t("filters:tags")}<TagOutlined/></Button>
        </Popover>
    );
}

interface PopoverContentProps {
    selected: string[]
    all: string[]
    onCheck(tag: string): void
}

function PopoverContent(props: PopoverContentProps) {
    return (
        <div style={{ maxWidth: "200px" }}>
            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}></div>
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
        </div>
    );
}