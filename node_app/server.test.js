const request = require('supertest');
const app = require('./server');

test('GET / retourne un message de bienvenue', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('Bienvenue sur mon serveur CI/CD !');
});
