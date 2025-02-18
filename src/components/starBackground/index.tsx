import Styles from "./index.module.scss";

const StarBackground = () => {
  return (
    <div className={`${Styles.container}`}>
      <div className={`${Styles.starLayer1}`}></div>
      <div className={`${Styles.starLayer2}`}></div>
      <div className={`${Styles.starLayer3}`}></div>
      <div className={`${Styles.starLayer4}`}></div>
      <div className={`${Styles.starLayer5}`}></div>
    </div>
  );
};

export default StarBackground;
