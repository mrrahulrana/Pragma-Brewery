export const getBeers = jest.fn(() =>
  Promise.resolve({
    data: [
      {
        id: 'UENki',
        name: 'Pilsner',
        minimumTemperature: 4,
        maximumTemperature: 6,
        temperature: 5,
      },
    ],
  }),
);
