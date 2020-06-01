import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react';
import { Provider } from 'unstated';
import '@testing-library/jest-dom/extend-expect';

import RefrigeratorsList from './RefrigeratorsList';

import BeersContainer from '../../containers/BeersContainer';

jest.mock('../../services/beers');

const setup = dependencies =>
  render(
    <Provider inject={dependencies}>
      <RefrigeratorsList />
    </Provider>,
  );

afterEach(cleanup);

describe('RefrigeratorsList', () => {
  it('should show loading message only during load', async () => {
    const { getAllByTestId, queryByTestId } = setup();

    expect(queryByTestId('refrigerators__loading')).toBeInTheDocument();

    const cards = await waitForElement(() =>
      getAllByTestId('refrigerators-list__card'),
    );

    expect(cards).toHaveLength(1);
    expect(queryByTestId('refrigerators__loading')).not.toBeInTheDocument();
  });

  it('should not show tag when all status are OK', async () => {
    const { getAllByTestId, queryByTestId } = setup();

    await waitForElement(() => getAllByTestId('refrigerators-list__card'));

    expect(queryByTestId('refrigerators-list__tag')).not.toBeInTheDocument();
  });

  it('should show the warning tag when temperature is out of bounds', async () => {
    const container = new BeersContainer();

    const beerUpdate = {
      id: 'UENki',
      temperature: 10,
    };

    await container._loadBeers();
    await container.updateBeerTemperature(beerUpdate);

    const { getByTestId, queryByTestId } = setup([container]);

    const tag = await waitForElement(() =>
      getByTestId('refrigerators-list__tag'),
    );
    expect(tag).toHaveTextContent('TOO HIGH');
  });
});
