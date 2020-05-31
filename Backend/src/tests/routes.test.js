const request = require('supertest');

const routes = require('../src/routes');

jest.mock('../src/services/temperatures');

describe('Http server', () => {
  it('should response 404 for unknown paths', async () => {
    const response = await request(routes).get('/');
    expect(response.statusCode).toBe(404);
  });

  it('should respond with a list of beers on /beers path', async () => {
    const response = await request(routes).get('/beers');

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchSnapshot();
  });
});
