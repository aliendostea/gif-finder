import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendRequest = useCallback(
    async (
      requestConfig: {
        url?: any;
        method?: string;
        headers?: any;
        body?: any;
      },
      applyData: (props: any) => void
    ) => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response: any = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        setIsLoading(false);
        applyData(data);
      } catch (err: any) {
        setIsError(err.message || "Something went wrong!");
        setIsLoading(false);
      }
    },
    []
  );

  return {
    isLoading,
    isError,
    sendRequest,
  };
};

export default useHttp;
