const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

interface GetApiEndpointProps {
  query: string;
  limit: number;
  offset: number;
}

export function getApiEndpoint({ query, limit, offset }: GetApiEndpointProps) {
  return `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}&rating=g&lang=en`;
}
