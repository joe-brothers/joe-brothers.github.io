export interface Image {
  kind: "image";
  imageSrc: string;
  imageAlt: string;
}
export interface Emoji {
  kind: "emoji";
  emojiString: string;
}

export type Thumbnail = Image | Emoji;

export type CardWithThumbnailData = {
  title: string;
  summary: string;
  thumbnail: Thumbnail;
  onClickPlay: () => void;
  onClickShare: () => void;
}[];