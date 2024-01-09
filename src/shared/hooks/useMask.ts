import React, { useCallback, useState } from "react";

interface useMaskProps {
    pattern: string;
    skipSymbol: string;
    allowValues?: RegExp | string;
}

export function useMask({ pattern, skipSymbol, allowValues }: useMaskProps) {
    const [value, setValue] = useState("");
    const [back, setBack] = useState(false);
    const slots = new Set(skipSymbol || "_");
    const accept = new RegExp(allowValues || "\\d", "g");
    const first = pattern.split("").findIndex(c => slots.has(c));
    const prev = (j => Array.from(pattern as ArrayLike<string>, (c, i) => slots.has(c) ? j = i + 1 : j))(0);
    const clean = useCallback((input: string) => {
        let input_ = input?.match(accept) || [];
        return Array.from(pattern, c => {
            if (input_.length > 0) {
                return input_[0] === c || slots.has(c) ? input_.shift() || c : c;
            }
            return "";
        });
    }, [value]);

    const format = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (back) {
            return;
        }
        const [i, j] = [event.target.selectionStart, event.target.selectionEnd].map(i => {
            i = clean(event.target.value.slice(0, i as number)).findIndex(c => slots.has(c));
            return i < 0 ? prev[prev.length - 1] : back ? prev[i - 1] || first : i;
        });
        setValue(clean(event.target.value).join(""));
        event.target.setSelectionRange(i, j);
        setBack(false);
    };

    const keydown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Backspace") {
            setValue(value.slice(0, value.length - 2));
            setBack(true);
            return;
        }
        setBack(false);
    }, [value, back]);

    const blur = useCallback(() => {
        return value === pattern && (setValue(""));
    }, [value, setValue]);


    return { value: value, format: format, keydown: keydown, blur: blur, setValue: setValue };
}