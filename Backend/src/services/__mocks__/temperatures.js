const getSensorTemperature = jest.fn(beerId =>
    Promise.resolve({
      data: {
        id: beerId,
        temperature: 0,
      },
    }),
  );
  
  module.exports.getSensorTemperature = getSensorTemperature;
  