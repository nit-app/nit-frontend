import { TagOutlined } from "@ant-design/icons";
import { Button } from "@/shared/ui/button";
import { Namespace, useTranslation } from "@/shared/translation";
import { Popover, Tag } from "antd";
import { useState } from "react";

interface TagFilterProps {
    selected: string[];
    all: string[];
    onCheck: (tag: string) => void;
}


export function TagFilter(props: TagFilterProps) {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation(Namespace.content);

    return (
        <Popover
            content={
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
                    <a onClick={() => setOpen(p => !p)}>Закрыть</a>
                </div>
            }
            title="Выберите теги"
            trigger="click"
            open={open}
        >
            <Button onClick={() => setOpen(p => !p)}>{t("filters:tags")}<TagOutlined/></Button>
        </Popover>
    );
}