import React, { Suspense, useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGetRandomGifts from "@/hooks/use-get-random-gifts";
import useHttp from "@/hooks/use-http";
import { Button } from "@/components/button";
import { LoaderDots } from "@/components/loaderDotsTwo";
import { Card } from "@/components/card";
import { NotificationToast } from "@/components/notificationToast";
import { TextField } from "@/components/textField";
import {
  generateRandomNumbers,
  getApiEndpoint,
  getRandomWords,
} from "@/service";
import { GifDataProps, ResponseGiphyDataProps } from "@/models/modelGifts";
import style from "./Home.module.scss";
import ErrorOnLoad from "./ErrorOnLoad";

const Home = () => {
  const urlParam = useParams();
  const navigate = useNavigate();
  const { isLoading, sendRequest: fetchData } = useHttp();
  const { randomGifts, getThreeRandomGifts, isErrorRandomGifts } =
    useGetRandomGifts();
  const [arrayGif, setArrayGif] = useState<GifDataProps[] | []>([]);
  const [isToastActive, setIsToastActive] = useState(false);
  const [page, setPage] = useState(1);
  const inputSearchRef = useRef<HTMLInputElement | null>(null);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputSearchRef?.current?.value === "") return;

    navigate(`/search/${inputSearchRef?.current?.value}`);
    const url = getApiEndpoint({
      query: inputSearchRef?.current?.value ?? "",
      limit: 10,
      offset: 0,
    });

    const setData = (res: ResponseGiphyDataProps) => {
      if (res?.meta.status !== 200) return;
      setArrayGif(res.data);
    };

    fetchData(
      {
        url,
        method: "GET",
      },
      setData
    );
  };

  const handleOnClickCopyGif = async (id: string) => {
    const urlToCopy = `https://media.giphy.com/media/${id}/giphy.gif`;
    try {
      await navigator?.clipboard?.writeText(urlToCopy);
      setIsToastActive(true);
    } catch (error) {
      console.error("Failed to copy gif:", error);
    }
  };

  const handleOnClickMoreGif = () => {
    const limit = 10;
    const offset = limit * page;

    let url = getApiEndpoint({
      query: inputSearchRef?.current?.value ?? "",
      limit: limit,
      offset: offset,
    });

    if (inputSearchRef?.current?.value === "") {
      url = getApiEndpoint({
        query: urlParam.searched ?? "",
        limit: limit,
        offset: offset,
      });
    }

    const setData = (res: ResponseGiphyDataProps) => {
      if (res?.meta.status !== 200) return;

      const copyGifts = structuredClone(arrayGif);
      const newArrayGifts = [...copyGifts, ...res.data];

      setPage((prevState) => prevState + 1);

      setArrayGif(newArrayGifts);
    };

    fetchData(
      {
        url,
        method: "GET",
      },
      setData
    );
  };

  useEffect(() => {
    if (Object.values(urlParam).length === 0 || urlParam.searched === undefined)
      return;

    const setData = (res: ResponseGiphyDataProps) => {
      if (res?.meta.status !== 200) return;
      setArrayGif(res.data);
    };

    fetchData(
      {
        url: getApiEndpoint({ query: urlParam.searched, limit: 10, offset: 0 }),
        method: "GET",
      },
      setData
    );
  }, []);

  useEffect(() => {
    const randomNumbers = generateRandomNumbers();
    const randomWords = getRandomWords(
      randomNumbers[0],
      randomNumbers[1],
      randomNumbers[2]
    );
    getThreeRandomGifts(randomWords);
  }, []);

  return (
    <div className="main-container">
      <div className={style["container-intro"]}>
        <h1 className={style["main-title"]}>
          Find the best
          <span>Gifts,</span>
          <br />
          and share them quickly
          <span>&#9889;</span>
        </h1>
      </div>
      <span className={style["container-intro__span"]}></span>
      <div className={style["container-form"]}>
        <form onSubmit={handleOnSubmit}>
          <TextField
            ref={inputSearchRef}
            id="inputSearch"
            name="inputSearch"
            type="text"
            placeholder="Find and share gif"
          />
        </form>
      </div>
      <Suspense
        fallback={
          <div className={style["container-random"]}>
            <LoaderDots />
          </div>
        }
      >
        <div className={style["container-random"]}>
          {arrayGif.length === 0 &&
            randomGifts?.map((gif) => (
              <Card
                key={gif.id}
                id={gif.id}
                urls={gif.images.fixed_height_small}
                handleOnClickCopyGif={handleOnClickCopyGif}
              />
            ))}
        </div>
      </Suspense>

      <Suspense
        fallback={
          <div className={style.container}>
            <LoaderDots />
          </div>
        }
      >
        <div className={style.container}>
          <NotificationToast
            title="Gif copied successfully"
            isToastActive={isToastActive}
            setIsToastActive={setIsToastActive}
          />
          {arrayGif.map((gif) => (
            <Card
              key={gif.id}
              id={gif.id}
              urls={gif.images.fixed_height_small}
              handleOnClickCopyGif={handleOnClickCopyGif}
            />
          ))}
        </div>
      </Suspense>

      {isErrorRandomGifts && <ErrorOnLoad />}

      <div className={style["add-more-box"]}>
        {arrayGif.length === 0 && (
          <Button theme="light" onClick={handleOnClickMoreGif} disabled={true}>
            <span>Find more gifts</span>
          </Button>
        )}

        {isLoading && (
          <Button onClick={handleOnClickMoreGif} disabled={true}>
            <LoaderDots />
          </Button>
        )}

        {isLoading === false && arrayGif.length > 0 && (
          <Button onClick={handleOnClickMoreGif}>
            <span>Find more gifts</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Home;
