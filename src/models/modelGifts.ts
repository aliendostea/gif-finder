enum Type {
  GIF = "gif",
}

export interface GifPromesesResDataProps {
  status: string;
  value: ResponseGiphyDataProps;
}

export interface ResponseGiphyDataProps {
  data: GifDataProps[];
  pagination: PaginationResProps;
  meta: MetaResProps;
}

export interface GifDataProps {
  type: Type;
  id: string;
  url: string;
  slug: string;
  bitlyGIFURL: string;
  bitlyURL: string;
  embedURL: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  contentURL: string;
  sourceTLD: string;
  sourcePostURL: string;
  isSticker: number;
  importDatetime: string;
  trendingDatetime: string;
  images: ImagesGiftSizeProps;
  analyticsResponsePayload: string;
  analytics: GifAnalyticsProps;
}

export interface PaginationResProps {
  totalCount: number;
  count: number;
  offset: number;
}

interface MetaResProps {
  status: number;
  msg: string;
  responseID: string;
}

////// errorrrr arreglar fixed_height_small por fixedHeightSmall

export interface ImagesGiftSizeProps {
  original: ImageGifAllOptions;
  downsized: ImageGifWithoutMp4Options;
  downsizedLarge: ImageGifWithoutMp4Options;
  downsizedMedium: ImageGifWithoutMp4Options;
  downsizedSmall: DownsizedSmall;
  downsizedStill: ImageGifWithoutMp4Options;
  fixedHeight: ImageGifAllOptions;
  fixedHeightDownsampled: ImageGifAllOptions;
  fixed_height_small: ImageGifAllOptions;
  fixedHeightSmallStill: ImageGifWithoutMp4Options;
  fixedHeightStill: ImageGifWithoutMp4Options;
  fixedWidth: ImageGifAllOptions;
  fixedWidthDownsampled: ImageGifAllOptions;
  fixedWidthSmall: ImageGifAllOptions;
  fixedWidthSmallStill: ImageGifWithoutMp4Options;
  fixedWidthStill: ImageGifWithoutMp4Options;
  looping: LoopingOption;
  originalStill: ImageGifWithoutMp4Options;
  originalMp4: DownsizedSmall;
  preview: DownsizedSmall;
  previewGIF: ImageGifWithoutMp4Options;
  previewWebp: ImageGifWithoutMp4Options;
  the480WStill: ImageGifWithoutMp4Options;
  hd?: DownsizedSmall;
}

interface ImageGifAllOptions {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4Size?: string;
  mp4?: string;
  webpSize: string;
  webp: string;
  frames?: string;
  hash?: string;
}

interface ImageGifWithoutMp4Options {
  height: string;
  width: string;
  size: string;
  url: string;
}

interface DownsizedSmall {
  height: string;
  width: string;
  mp4Size: string;
  mp4: string;
}

interface LoopingOption {
  mp4Size: string;
  mp4: string;
}

interface GifAnalyticsProps {
  onload: AnalyticsUrl;
  onclick: AnalyticsUrl;
  onsent: AnalyticsUrl;
}
interface AnalyticsUrl {
  url: string;
}
