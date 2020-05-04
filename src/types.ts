type Movie = {
    id: string;
    title: string;
    overview: string;
    imageUrl: string; 
}

export type TrendingMovieItem = Movie & {
};

export type PopularMovieItem = Movie & { 
    voteAverage: number; 
};

export type TruncateTextType = {
    text: string;
    length: number;
};
