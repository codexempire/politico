import request from 'supertest';
import { expect } from 'chai';

import app from '../app';

describe('POST /party',() => {
  it('respond with status 201 and json containing the newly created party', (done) => {
    request(app)
     .post('/api/v1/party')
     .send({
       "name": 'name',
       "hqAddress": 'hqAddress',
       logoUrl: 'logo',
     })
     .set('Accept', 'application/json')
     .expect(201, done)
   });
  
  it('response should have a party object with the name property and value party', (done) => {
    request(app)
      .post('/api/v1/party')
      .send({
        "name": "party",
        "hqAddress": "address",
        "logoUrl": "url",
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body.data[0]).to.have.property('name')
        expect(res.body.data[0].name).to.equal('party')
        done(err);
      });
  });
});
