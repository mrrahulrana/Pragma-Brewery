import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react';
import { Provider } from 'unstated';

import DevTools from './DevTools';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../services/beers');

const setup = () =>
  render(
    <Provider>
      <DevTools />
    </Provider>,
  );

afterEach(cleanup);

describe('DevTools', () => {
  it('should show loading message only during load', async () => {
    const { getAllByTestId, queryByTestId } = setup();

    expect(queryByTestId('devtools__loading')).toBeInTheDocument();

    const beerItems = await waitForElement(() =>
      getAllByTestId('devtools__beer-item'),
    );

    expect(beerItems).toHaveLength(1);
    expect(queryByTestId('devtools__loading')).not.toBeInTheDocument();
  });

  it('should decrease the temperature of a beer container when the button is clicked', async () => {
    const { getAllByTestId, queryByTestId } = setup();

    const firstDecreaseButton = await waitForElement(
      () => getAllByTestId('devtools__decrease-button')[0],
    );

    expect(
      getAllByTestId('devtools__current-temperature')[0],
    ).toHaveTextContent('5°C');

    await fireEvent.click(firstDecreaseButton);
    await fireEvent.click(firstDecreaseButton);
    await fireEvent.click(firstDecreaseButton);

    expect(
      getAllByTestId('devtools__current-temperature')[0],
    ).toHaveTextContent('4.7°C');
  });

  it('should increase the temperature of a beer container when the button is clicked', async () => {
    const { getAllByTestId, queryByTestId } = setup();

    const firstIncreaseButton = await waitForElement(
      () => getAllByTestId('devtools__increase-button')[0],
    );

    expect(
      getAllByTestId('devtools__current-temperature')[0],
    ).toHaveTextContent('5°C');

    await fireEvent.click(firstIncreaseButton);
    await fireEvent.click(firstIncreaseButton);

    expect(
      getAllByTestId('devtools__current-temperature')[0],
    ).toHaveTextContent('5.2°C');
  });
});
