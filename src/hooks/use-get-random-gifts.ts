import { GifDataProps } from "@/models/modelGifts";
import { getApiEndpoint } from "@/service";
import { useState } from "react";

const useGetRandomGifts = () => {
  const [randomGifts, setRandomGifts] = useState<GifDataProps[] | []>([]);
  const [isErrorRandomGifts, setIsErrorRandomGifts] = useState(false);

  const getThreeRandomGifts = async (randomWords: string[]) => {
    const [randomWordOne, randomWordTwo, randomWordThree] = randomWords;

    try {
      const responses: any = await Promise.allSettled([
        await fetch(
          getApiEndpoint({ query: randomWordOne, limit: 1, offset: 0 })
        ).then((values) => values.json()),
        await fetch(
          getApiEndpoint({ query: randomWordTwo, limit: 1, offset: 0 })
        ).then((values) => values.json()),
        await fetch(
          getApiEndpoint({ query: randomWordThree, limit: 1, offset: 0 })
        ).then((values) => values.json()),
      ]);

      if (
        responses[0]?.value?.meta?.status === 401 ||
        responses[1]?.value?.meta?.status === 401 ||
        responses[1]?.value?.meta?.status === 401
      ) {
        setIsErrorRandomGifts(true);
        setRandomGifts([]);
        return;
      }

      const dataGifts: GifDataProps[] = responses.map((element: any) => {
        return element.value.data[0];
      });

      setRandomGifts(dataGifts);
    } catch (error) {
      console.log("error", error);
    }
  };

  return {
    randomGifts,
    getThreeRandomGifts,
    isErrorRandomGifts,
  } as const;
};

export default useGetRandomGifts;
