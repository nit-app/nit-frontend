import * as styles from "./styled.module.scss";

import React, { MutableRefObject, useEffect, useRef, useState, KeyboardEvent } from "react";
import { Input } from "@/shared/ui";
import { InputProps, Tag } from "antd";

export interface ChipInputProps extends Omit<InputProps, "inputRef"> {
    chips: string[];
    inputRef?: MutableRefObject<{ value: string[] | null } | null>;
    maxCount?: number;
}

const ChipInput = (props: ChipInputProps) => {
    const [chips, changeChips] = useState(props.chips);
    const inputRef = useRef<HTMLInputElement | null>(null);

    console.log(chips);
    function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (e.code === "Space" && !!inputRef.current) {
            console.log("this");
            console.log(inputRef.current);
            const inputData = inputRef?.current?.input?.value ? inputRef?.current?.input?.value.trim() : undefined;
            console.log(inputData);
            if (!inputData) return;
            if (chips.includes(inputData)) return;
            if (props.maxCount && chips.length >= props.maxCount) return;
            changeChips([...chips, inputData.trim()]);
            inputRef.current.value = "";
        }
    }

    function onDelete(chip: string) {
        changeChips(chips.filter(c => c !== chip));
    }

    useEffect(() => {
        if (props.inputRef) {
            props.inputRef.current = { value: chips };
        }
    }, [chips, props.inputRef]);

    return (
        <div
            className={styles.container}
        >
            {chips.map(chip => <Tag key={chip}  closable onDelete={onDelete}>{chip}</Tag>)}
            <Input placeholder={props.placeholder} onKeyDown={(e) => onKeyDown(e)} ref={inputRef}/>
        </div>
    );
};

export default ChipInput;