import styles from "./index.module.scss";

const Work = () => {
  const data = [
    {
      year: "2021",
      title: "前端工程师",
      desc: "负责业务系统开发与组件库建设",
    },
    {
      year: "2023",
      title: "高级前端工程师",
      desc: "主导架构升级、性能优化与工程化",
    },
    {
      year: "2025",
      title: "全栈 / 技术负责人",
      desc: "负责系统架构设计与技术选型",
    },
  ];

  return (
    <>
      <div className={styles["timeline-container"]}>
        <div className={styles["line"]}></div>
        <div className={styles["dot-container"]}>
          {data.map((item, index) => (
            <div key={index} className={styles["dot-wrapper"]}>
              <div className={styles["dot"]}></div>
              <span className={styles["year"]}>{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
