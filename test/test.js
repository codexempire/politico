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

describe('GET /party/1', () => {
  it('Fetch a specific political party', (done) => {
    request(app)
      .get('/api/v1/party/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});


describe('POST /party', () => {
  it('Create a Political Party', (done) => {
    request(app)
      .post()
      .send({
        name: 'name',
        hqAddress: 'hqAddress',
        logoUrl: 'logoUrl',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('PATCH /party/name', () => {
  it('edit the name of a specific political party', (done) => {
    request(app)
      .patch('/api/v1/parties/name')
      .send({
        name: 'name',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('DELETE /party/1', () => {
  it('delete a specific political party', (done) => {
    request(app)
      .delete('/api/v1/parties/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /office/1', () => {
  it('Fetch a specific office', (done) => {
    request(app)
      .get('/api/v1/office/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /office', () => {
  it('Fetch all offices', (done) => {
    request(app)
      .get('/api/v1/office/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /office', () => {
  it('Create an Office', (done) => {
    request(app)
      .post()
      .send({
        type: 'type',
        name: 'name',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
