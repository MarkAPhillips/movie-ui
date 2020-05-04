import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import wait from "waait";


// Component in test
import { TrendingMoviesList } from './TrendingMoviesList';

import { GET_TRENDING} from "../../queries";
import {act} from "react-dom/test-utils";

const mocks = [
    {
        request: {
            query: GET_TRENDING
        },
        result: {
            data: {
                trending: [
                    { id: '1', title: 'title1', overview: 'overview1', imageUrl: 'url1' },
                    { id: '2', title: 'title2', overview: 'overview2', imageUrl: 'url2' }
                    ],
            },
        },
    },
];

describe('TrendingMoviesList',() => {

    it('should render title',async ()=>{
        // build
        const {getByText} = render(
            <MockedProvider mocks={mocks} addTypename={false} >
                <TrendingMoviesList />
            </MockedProvider>
            );

        // result
        const title = 'TRENDING MOVIES';


        await wait();

        // test
        expect(getByText(title)).toBeInTheDocument;

    })

    it('should render list', async()=>{
        // build
        const {getByText, debug} = render(
            <MockedProvider mocks={mocks} addTypename={false} >
                <TrendingMoviesList />
            </MockedProvider>
        );

        await wait(0);

        // test
        expect(getByText('1: title1 - overview1').textContent).toBe('1: title1 - overview1')
        expect(getByText('2: title2 - overview2').textContent).toBe('2: title2 - overview2')


    })

    it('should be in the document',async ()=>{
        // build
        const {getByText, debug} = render(
            <MockedProvider mocks={mocks} addTypename={false} >
                <TrendingMoviesList />
            </MockedProvider>
        );

        await wait(0);

        // test
        expect(getByText('1: title1 - overview1')).toBeInTheDocument();

    })

    it('should return 2 items',async ()=>{
        // build
        const {queryAllByTestId} = render(
            <MockedProvider mocks={mocks} addTypename={false} >
                <TrendingMoviesList />
            </MockedProvider>
        );

        await wait(0);

        // build
        const numberOfMatchingQueries = queryAllByTestId(/trending/i);

        // test
        expect(numberOfMatchingQueries.length).toBe(2);
    })

    it('should return items in order',async ()=>{
        // build
        const {queryAllByTestId} = render(
            <MockedProvider mocks={mocks} addTypename={false} >
                <TrendingMoviesList />
            </MockedProvider>
        );

        await wait(0);

        const numberOfMatchingQueries = queryAllByTestId(/trending/i);

        // test
        expect(numberOfMatchingQueries[0].getAttribute('data-testId')).toBe('trending-1');
        expect(numberOfMatchingQueries[1].getAttribute('data-testId')).toBe('trending-2');
    })

})