import { render } from 'react-dom';
import React from 'react';

const App = (): JSX.Element => <div><h2>Movie UI</h2></div>;

const rootElement = document.getElementById("root");
render(<App />, rootElement);