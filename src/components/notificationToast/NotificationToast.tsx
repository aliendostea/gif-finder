import { useEffect } from "react";
import iconCheck from "../../assets/img/icon-check.png";
import iconX from "../../assets/img/icon-x.png";
import styles from "./NotificationToast.module.scss";

interface NotificationToastProps {
  title: string;
  isToastActive: boolean;
  setIsToastActive: (e: boolean) => void;
}

const NotificationToast = ({
  title,
  isToastActive,
  setIsToastActive,
}: NotificationToastProps) => {
  const handleClick = () => {
    setIsToastActive(false);
  };

  useEffect(() => {
    if (isToastActive === false) return;

    const idSetTimeout = setTimeout(() => {
      setIsToastActive(false);
    }, 4000);

    return () => {
      clearTimeout(idSetTimeout);
    };
  }, [isToastActive]);

  if (isToastActive) {
    return (
      <div className={styles.toast}>
        <figure>
          <img src={iconCheck} alt="check" />
        </figure>
        <p>{title}</p>
        <button onClick={handleClick} className={styles["btn-x"]}>
          <figure>
            <img src={iconX} alt="x" />
          </figure>
        </button>
      </div>
    );
  }

  return null;
};

export default NotificationToast;
