import style from "./LoaderDots.module.scss";

const LoaderDots = () => {
  return (
    <div className={style["loader__parent"]}>
      <ul className={style.loader}>
        <li className={style["loader__item"]}></li>
        <li className={style["loader__item"]}></li>
        <li className={style["loader__item"]}></li>
      </ul>
    </div>
  );
};

export default LoaderDots;
