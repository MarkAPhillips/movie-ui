import React from 'react';

interface MovieItem { id: string; title: string; overview: string };
interface Props {
    list:  Array<MovieItem>;
}

export const TrendingMoviesList: React.FC<Props> = ({list}: Props) => {
    return (
        <>
            <div>TRENDING MOVIES</div>
            <ul>
            {
                list && list.map((movie)=>{
                    return <li key={movie.id} data-testid={`trending-${movie.id}`}>{movie.id}: {movie.title} - {movie.overview}</li>;
                })
            }
            </ul>
        </>
    )
};



// import React from 'react';

// interface MovieItem { id: string; title: string; overview: string };
// interface Props {
//     list:  Array<MovieItem>;
// }

// export const TrendingMoviesList: React.FC<Props> = ({list}: Props) => {
//     return (
//         <>
//             <div>TRENDING MOVIES</div>
//             <ul>
//             {
//                 list && list.map((movie)=>{
//                     return <li key={movie.id} data-testid={`trending-${movie.id}`}>{movie.id}: {movie.title} - {movie.overview}</li>;
//                 })
//             }
//             </ul>
//         </>
//     )
// };