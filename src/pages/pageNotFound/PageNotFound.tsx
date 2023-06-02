import { useState } from "react";
import { Card } from "@/components/card";
import { useNavigate } from "react-router-dom";
import { NotificationToast } from "@/components/notificationToast";
import style from "./PageNotFound.module.scss";

const PageNotFound = () => {
  const navigate = useNavigate();
  const [isToastActive, setIsToastActive] = useState(false);

  const handleOnClickCopyGif = async (id: any) => {
    const urlToCopy = `https://media.giphy.com/media/${id}/giphy.gif`;
    try {
      await navigator?.clipboard?.writeText(urlToCopy);
      setIsToastActive(true);
    } catch (error) {
      console.error("Failed to copy gif:", error);
    }
  };

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <div className="main-container">
      <NotificationToast
        title="Gif copied successfully"
        isToastActive={isToastActive}
        setIsToastActive={setIsToastActive}
      />
      <div className={style["not-found-intro"]}>
        <h1 className={style["main-title"]}>
          Ups! I&apos;m sorry,
          <br />
          looks like you got lost
        </h1>
      </div>
      <span className={style["not-found-intro__span"]}></span>
      <div className={style["not-found"]}>
        <Card
          id="115445"
          urls={{
            height: "100",
            mp4: "https://media1.giphy.com/media/mPytjcsG3XS4o/100.mp4?cid=de7a98bdvgolewag0z8c4pc65o6rckwh8pay93s3zmp8cpqx&ep=v1_gifs_search&rid=100.mp4&ct=g",
            mp4_size: "42918",
            size: "92808",
            url: "https://media1.giphy.com/media/mPytjcsG3XS4o/100.gif?cid=de7a98bdvgolewag0z8c4pc65o6rckwh8pay93s3zmp8cpqx&ep=v1_gifs_search&rid=100.gif&ct=g",
            webp: "https://media1.giphy.com/media/mPytjcsG3XS4o/100.webp?cid=de7a98bdvgolewag0z8c4pc65o6rckwh8pay93s3zmp8cpqx&ep=v1_gifs_search&rid=100.webp&ct=g",
            webp_size: "53986",
            width: "161",
          }}
          handleOnClickCopyGif={handleOnClickCopyGif}
        />
        <button onClick={handleOnClick}>Go back</button>
      </div>
    </div>
  );
};

export default PageNotFound;
