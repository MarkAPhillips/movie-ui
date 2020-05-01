import { render } from 'react-dom';
import React from 'react';

import { TrendingMoviesList } from '../src/components/TrendingMoviesList/TrendingMoviesList';

const testMovieList = [
    {id:'1',title:'title1',overview:'overview1'},
    {id:'2',title:'title2',overview:'overview2'}
];

// const App = (): JSX.Element => <div><h2>Movie UI</h2></div>;
const App = (): JSX.Element => <TrendingMoviesList list={testMovieList} />;

const rootElement = document.getElementById("root");
render(<App />, rootElement);