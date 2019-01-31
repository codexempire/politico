import request from 'supertest';
import { expect } from 'chai';

import app from '../app';


describe('GET /party',() => {
  it('respond with a status code 200', (done) => {
    request(app)
      .get('/api/v1/party')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });

  it('respond with an array of party object', (done) => {
    request(app)
      .get('/api/v1/party')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body.data).to.be.a("Array");
        expect(res.body.data[0]).to.have.property('name');
        expect(res.body.data[0]).to.have.property('logoUrl');
        done(err);
      });
  });
});
