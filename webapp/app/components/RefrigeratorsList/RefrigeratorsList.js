import React from 'react';
import { Subscribe } from 'unstated';

import BeersContainer from '../../containers/BeersContainer';
import RefrigeratorItem from './RefrigeratorItem';

import './RefrigeratorsList.css';

const RefrigeratorsList = () => (
  <Subscribe to={[BeersContainer]}>
    {({ state, updateBeerTemperature }) => (
      <section className="refrigerators-list">
        {state.isLoading && (
          <span data-testid="refrigerators__loading">Loading...</span>
        )}

        {!state.isLoading &&
          state.list.map(beer => {
            return (
              <RefrigeratorItem
                key={beer.id}
                beer={beer}
                updateBeerTemperature={updateBeerTemperature}
              />
            );
          })}
      </section>
    )}
  </Subscribe>
);

export default RefrigeratorsList;
