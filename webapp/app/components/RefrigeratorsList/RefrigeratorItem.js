import React from 'react';

import useBeerUpdates from './useBeerUpdates';

const setCardClassName = beer => {
  const baseClass = 'refrigerators-list__card';
  return `${baseClass} ${baseClass}--${beer.status.toLowerCase()}`;
};

const RefrigeratorItem = ({ beer, updateBeerTemperature }) => {
  useBeerUpdates(beer, updateBeerTemperature);

  return (
    <article
      data-testid="refrigerators-list__card"
      className={setCardClassName(beer)}
    >
      <header>
        <h2 className="refrigerators-list__name">
          {beer.name} (<strong>{beer.temperature}°C</strong>)
        </h2>
        <p>{`${beer.minimumTemperature}°C - ${beer.maximumTemperature}°C`}</p>
      </header>

      {beer.status !== 'OK' && (
        <div>
          <span
            data-testid="refrigerators-list__tag"
            className="refrigerators-list__tag"
          >
            {beer.status.replace('_', ' ')}
          </span>
        </div>
      )}
    </article>
  );
};

export default RefrigeratorItem;
