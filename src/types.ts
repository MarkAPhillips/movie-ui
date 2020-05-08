export type MovieType = {
    id: string;
    title: string;
    overview: string;
    imageUrl: string;
    voteAverage: number;
}

export type TruncateTextType = {
    text: string;
    length: number;
};

export type CarouselType = {
  children: object;
  title?: string;
}
