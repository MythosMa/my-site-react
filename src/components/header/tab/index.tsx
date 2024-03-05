import styles from "./index.module.scss";

export default function TabText(props: { text: string; className?: string }) {
  return (
    <div className={[props.className, styles.text, "w-fit"].join(" ")}>
      {props.text}
    </div>
  );
}
