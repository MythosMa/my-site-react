import styles from "./index.module.scss";

export default function TabText(props: {
  text: string;
  isCurrent?: boolean;
  className?: string;
}) {
  const { isCurrent = false, text, className } = props;
  return (
    <div
      className={[
        className,
        styles.text,
        isCurrent ? "text-white" : "text-gray-500",
        "text-[16px] w-fit",
      ].join(" ")}
    >
      {text}
    </div>
  );
}
