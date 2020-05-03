type Movie = {
    id: string;
    title: string;
    overview: string;
}

export type TrendingMovieItem = Movie & {
     imageUrl: string; 
};

export type PopularMovieItem = Movie & { 
    voteAverage: number; 
};
