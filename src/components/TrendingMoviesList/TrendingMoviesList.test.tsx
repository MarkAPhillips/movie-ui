import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

// Component in test
import { TrendingMoviesList } from './TrendingMoviesList';


describe('TrendingMoviesList',()=>{

    it('should render list',()=>{
        //setup
        const testList = [
            {id:'1',title:'title1',overview:'overview1'},
            {id:'2',title:'title2',overview:'overview2'}
        ];

        // build
        const {getByText, debug} = render(<TrendingMoviesList list={testList} />);

        // test
        expect(getByText('1: title1 - overview1').textContent).toBe('1: title1 - overview1')
        expect(getByText('2: title2 - overview2').textContent).toBe('2: title2 - overview2')


    })

    it('should be in the document',()=>{
        // setup
        const testList = [
            {id:'1',title:'title1',overview:'overview1'},
            {id:'2',title:'title2',overview:'overview2'}
        ];

        // build
        const {getByText, debug} = render(<TrendingMoviesList list={testList} />);

        // test
        expect(getByText('1: title1 - overview1')).toBeInTheDocument();

    })

    it('should return 2 items',()=>{
        // setup
        const testList = [
            {id:'1',title:'title1',overview:'overview1'},
            {id:'2',title:'title2',overview:'overview2'}
        ];

        // build
        const {queryAllByTestId} = render(<TrendingMoviesList list={testList} />);
        const numberOfMatchingQueries = queryAllByTestId(/trending/i);

        // test
        expect(numberOfMatchingQueries.length).toBe(2);
    })

    it('should return items in order',()=>{
        // setup
        const testList = [
            {id:'1',title:'title1',overview:'overview1'},
            {id:'2',title:'title2',overview:'overview2'}
        ];

        // build
        const {queryAllByTestId} = render(<TrendingMoviesList list={testList} />);
        const numberOfMatchingQueries = queryAllByTestId(/trending/i);

        // test
        expect(numberOfMatchingQueries[0].getAttribute('data-testId')).toBe('trending-1');
        expect(numberOfMatchingQueries[1].getAttribute('data-testId')).toBe('trending-2');
    })

})