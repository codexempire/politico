/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../app';

chai.use(chaiHttp);
chai.should();

describe('POST /parties', () => {
  it('respond with a status 400', (done) => {
    chai.request(app)
      .post('/api/v1/parties')
      .send({
        name: 'name',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.a('object');
        res.should.be.a.json;
        done(err);
      });
  });
  it('should return the data of newly created party with status 201', (done) => {
    chai.request(app)
      .post('/api/v1/parties')
      .send({
        name: 'name',
        hqAddress: '10 a closse aggaga estate',
        logoUrl: 'http://www.google.com'
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.a.json;
        res.body.should.have.property('data');
        res.body.data[0].should.have.property('name').eql('NAME');
        res.body.data[0].should.have.property('hqAddress').eql('10 a closse aggaga estate');
        res.body.data[0].should.have.property('logoUrl').eql('http://www.google.com');
        done(err);
      });
  });
});

describe('GET /parties', () => {
  it('respond with a status 200 and json containing all created parties', (done) => {
    chai.request(app)
      .get('/api/v1/parties')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        res.should.be.a.json;
        res.body.should.have.property('data');
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('name');
        res.body.data[0].should.have.property('hqAddress');
        res.body.data[0].should.have.property('logoUrl');
        done(err);
      });
  });
});

describe('GET /parties/:id', () => {
  it('respond with a status 200 and json containing searched party', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/parties/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        res.should.be.a.json;
        res.body.should.have.property('data');
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('name');
        res.body.data[0].should.have.property('hqAddress');
        res.body.data[0].should.have.property('logoUrl');
        res.body.data[0].should.have.property('id').eql(1);
        done(err);
      });
  });
});


describe('POST /offices', () => {
  it('respond with a status 400', (done) => {
    chai.request(app)
      .post('/api/v1/offices')
      .send({
        name: 'name',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.a('object');
        res.should.be.a.json;
        done(err);
      });
  });
  it('should return the data of newly created office with status 201', (done) => {
    chai.request(app)
      .post('/api/v1/offices')
      .send({
        name: 'senate',
        type: 'federal'
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.a.json;
        res.body.should.have.property('data');
        res.body.data[0].should.have.property('name').eql('senate');
        res.body.data[0].should.have.property('type').eql('federal');
        done(err);
      });
  });
});

describe('GET /offices', () => {
  it('respond with a status 200 and json containing all created offices', (done) => {
    chai.request(app)
      .get('/api/v1/offices')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        res.should.be.a.json;
        res.body.should.have.property('data');
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('name');
        res.body.data[0].should.have.property('type');
        done(err);
      });
  });
});

describe('GET /offices/:id', () => {
  it('respond with a status 200 and json containing searched office', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/offices/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        res.should.be.a.json;
        res.body.should.have.property('data');
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('name');
        res.body.data[0].should.have.property('type');
        res.body.data[0].should.have.property('id').eql(1);
        done(err);
      });
  });
});

describe('DELETE /parties/:id', () => {
  it('respond with a status 200 and json containing deleted party', (done) => {
    const id = 1;
    chai.request(app)
      .delete(`/api/v1/parties/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        res.should.be.a.json;
        res.body.should.have.property('data');
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('name');
        res.body.data[0].should.have.property('hqAddress');
        res.body.data[0].should.have.property('logoUrl');
        res.body.data[0].should.have.property('id').eql(1);
        done(err);
      });
  });
});
