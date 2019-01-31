/* eslint-disable no-undef */
import request from 'supertest';

import app from '../app';

describe('GET /party', () => {
  it('Fetch all political parties records.', (done) => {
    request(app)
      .get('/api/v1/party')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
