import React from 'react';

const BeerItem = ({ beer, updateBeerTemperature }) => (
  <div data-testid="devtools__beer-item">
    <span className="devtools__beer-name">{beer.name}</span>
    <button
      data-testid="devtools__decrease-button"
      className="devtools__button"
      type="button"
      label="Decrease temperature"
      onClick={() => {
        updateBeerTemperature({
          ...beer,
          temperature: parseFloat((beer.temperature - 1.0).toFixed(1)),
        });
      }}
    >
      -
    </button>
    <span
      data-testid="devtools__current-temperature"
      className="devtools__beer-temperature"
    >
      {beer.temperature}°C
    </span>
    <button
      data-testid="devtools__increase-button"
      className="devtools__button"
      type="button"
      label="Increase temperature"
      onClick={() => {
        updateBeerTemperature({
          ...beer,
          temperature: parseFloat((beer.temperature + 1.0).toFixed(1)),
        });
      }}
    >
      +
    </button>
  </div>
);

export default BeerItem;
