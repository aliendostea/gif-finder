import style from "./FallbackApp.module.scss";

const FallbackApp = () => {
  return (
    <div className="main-container">
      <div className={style["container-intro"]}></div>
      <span className={style["container-intro__span"]}></span>
    </div>
  );
};

export default FallbackApp;
