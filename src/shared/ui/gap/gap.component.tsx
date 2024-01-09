import * as styles from "./styles.module.scss";

export function Gap({ size }: { size: "s" | "m" | "l" }) {
    return <div className={styles.gap} data-size={size}/>;
}