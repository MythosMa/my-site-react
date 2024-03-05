import styles from "./index.module.scss";

export default function TabText(props: Record<string, string | number>) {
  return <div className={[props.className, styles.text, "w-fit"].join(" ")}>{props.text}</div>;
}
