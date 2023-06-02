import style from "./Home.module.scss";

const ErrorOnLoad = () => {
  return (
    <div className={style.container}>
      <p className={style["error-p"]}>
        Sorry, we are having some issues, <br /> please come back later.
      </p>
    </div>
  );
};

export default ErrorOnLoad;
