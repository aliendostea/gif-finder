import { useEffect, useState } from "react";
import styles from "./Card.module.scss";

interface CardProps {
  id: string;
  urls: any;
  handleOnClickCopyGif: (id: string) => void;
}

const Card = ({ id, urls, handleOnClickCopyGif }: CardProps) => {
  const [isCopiedGifUrl, setIsCopiedGifUrl] = useState(false);

  const handleOnClick = () => {
    handleOnClickCopyGif(id);
    setIsCopiedGifUrl(true);
  };

  useEffect(() => {
    const idSetTimeout = setTimeout(() => {
      setIsCopiedGifUrl(false);
    }, 4000);

    return () => {
      clearTimeout(idSetTimeout);
    };
  }, [isCopiedGifUrl]);

  return (
    <div className={styles.card}>
      <video autoPlay loop muted width="300px" height="300px">
        <source src={urls.webp} type="video/webm" />
        <source src={urls.mp4} type="video/mp4" />
        <img src={urls.url} loading="lazy" />
      </video>

      <button className={styles["btn"]} onClick={handleOnClick}>
        {isCopiedGifUrl ? "Copied" : "Copy"}
      </button>
      <span className={styles["span-bg"]}></span>
    </div>
  );
};

export default Card;
