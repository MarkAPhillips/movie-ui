import React from 'react';
import { render } from '@testing-library/react';

// Component in test
import { TrendingMoviesList } from './TrendingMoviesList';


describe('TrendingMoviesList',()=>{

    it.only('should render title',()=>{
        // build
        const {getByText} = render(<TrendingMoviesList />);

        // result
        const title = 'TRENDING MOVIES';

        // test
        expect(getByText(title)).toBeInTheDocument;

    })

    it('should render list',()=>{
        // build
        const {getByText} = render(<TrendingMoviesList />);

        // test
        expect(getByText('1: title1 - overview1').textContent).toBe('1: title1 - overview1')
        expect(getByText('2: title2 - overview2').textContent).toBe('2: title2 - overview2')


    })

    it('should be in the document',()=>{
        // build
        const {getByText} = render(<TrendingMoviesList />);

        // test
        expect(getByText('1: title1 - overview1')).toBeInTheDocument();

    })

    it('should return 2 items',()=>{
        // build
        const {queryAllByTestId} = render(<TrendingMoviesList />);
        const numberOfMatchingQueries = queryAllByTestId(/trending/i);

        // test
        expect(numberOfMatchingQueries.length).toBe(2);
    })

    it('should return items in order',()=>{
        // build
        const {queryAllByTestId} = render(<TrendingMoviesList />);
        const numberOfMatchingQueries = queryAllByTestId(/trending/i);

        // test
        expect(numberOfMatchingQueries[0].getAttribute('data-testId')).toBe('trending-1');
        expect(numberOfMatchingQueries[1].getAttribute('data-testId')).toBe('trending-2');
    })

})