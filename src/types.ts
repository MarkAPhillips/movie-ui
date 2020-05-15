import { ReactNode } from 'react';

type EdgesType<T> = {
  node: T;
}

export type MovieType = {
    id: string;
    title: string;
    overview: string;
    imageUrl: string;
    releaseDate: string;
    voteAverage: number;
}

export type SearchMoviesType = {
  search: PagedType<MovieType>;
}

export type PagedType<T> = {
  totalCount: number;
  page: number;
  noOfPages: number;
  edges: EdgesType<T> [];
}

export type TruncateTextType = {
    text: string;
    length: number;
};

export type CarouselType = {
  children: ReactNode;
  title?: string;
}
