/* eslint-disable no-undef */
import request from 'supertest';
import { expect } from 'chai';

import app from '../app';


describe('POST /party', () => {
  it('respond with status 201 and json containing the newly created party', (done) => {
    request(app)
      .post('/api/v1/party')
      .send({
        name: 'name',
        hqAddress: 'address',
        logoUrl: 'logo',
      })
      .set('Accept', 'application/json')
      .expect(201, done);
  });

  it('response should have a party object with the name property and should be an Array', (done) => {
    request(app)
      .post('/api/v1/party')
      .send({
        name: 'name',
        hqAddress: 'address',
        logoUrl: 'logo',
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body.data[0]).to.have.property('name');
        expect(res.body.data).to.be.a('Array');
        done(err);
      });
  });
});


describe('GET /party', () => {
  it('resppond with the 200 status', (done) => {
    request(app)
      .get('/api/v1/party')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('respond with an array of object', (done) => {
    request(app)
      .get('/api/v1/party')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body.data).to.be.a('Array');
        done(err);
      });
  });
});
