import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/react-testing';

// Component in test
import { TrendingMoviesList } from './TrendingMoviesList';

import { GET_TRENDING } from "../../apollo/queries";

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

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

const ComponentUnderTest = <MemoryRouter>
    <MockedProvider mocks={mocks} addTypename={false} >
      <TrendingMoviesList />
    </MockedProvider>
    </MemoryRouter>;

describe('TrendingMoviesList tests', () => {

  it('should render a valid title', async () => {
    // build
    const { getByTestId } = render(ComponentUnderTest);

    await waitFor(() => getByTestId('carousel-title'));
    // result
    const title = getByTestId('carousel-title').textContent;

    // test
    expect(title).toBe('TRENDING MOVIES');
  })

  it('should return a list of movies with two items', async () => {
    // build
    const { queryAllByTestId, getByTestId } = render(ComponentUnderTest);

    await waitFor(() => getByTestId('carousel-title'));
    // build
    const numberOfMatchingQueries = queryAllByTestId(/trending/i);
    // test
    expect(numberOfMatchingQueries.length).toBe(2);
  })

  it('should return a list of movies in order', async () => {
    // build
    const { queryAllByTestId, getByTestId } = render(ComponentUnderTest);

    await waitFor(() => getByTestId('carousel-title'));

    const numberOfMatchingQueries = queryAllByTestId(/trending/i);

    // test
    expect(numberOfMatchingQueries[0].getAttribute('data-testId')).toBe('trending-1');
    expect(numberOfMatchingQueries[1].getAttribute('data-testId')).toBe('trending-2');
  })

  it('should be in the document',async ()=>{
    // build
    const {getByText} = render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false} >
          <TrendingMoviesList />
        </MockedProvider>
      </MemoryRouter>
    );

    await waitFor(() => getByText('title1'));

    // test
    expect(getByText('title1')).toBeInTheDocument();
    expect(getByText('overview1')).toBeInTheDocument();

  })

  it('should return 2 items',async ()=>{
    // build
    const {queryAllByTestId, getByText} = render(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false} >
          <TrendingMoviesList />
        </MockedProvider>
      </MemoryRouter>
    );

    await waitFor(() => getByText('title1'));

    // build
    const numberOfMatchingQueries = queryAllByTestId(/trending/i);

    // test
    expect(numberOfMatchingQueries.length).toBe(2);
  })

})



