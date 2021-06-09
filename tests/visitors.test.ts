import chai from 'chai';
import chaiHttp from 'chai-http';
import nock from 'nock';
import app from '../src/server';
import {
    validData,
    intentData,
    intentDataWithLowThreshold,
    unrecognisedIntentName } from './mock';
import config from '../src/config';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Test visitors chat', () => {
    before(async () => {
    
        nock.cleanAll();
    })
    
    describe('POST /', () => {
      it('should get a reply from ai bot', (done) => {
        // Mock the external ai api for intent
        nock(config.intentEndpoint)
        .post('/intents', validData)
        .reply(200, intentData);

        chai.request(app)
          .post('/api/v1/visitor/message')
          .send(validData)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.an('object');
            res.body.message.should.be.eq(validData.message)
            done();
          });
      }).timeout(5000);

      it('should return default message if confidence is lower than confidence threshold', (done) => {
        // Mock the external ai api for intent
        nock(config.intentEndpoint)
        .post('/intents', validData)
        .reply(200, intentDataWithLowThreshold);

        chai.request(app)
          .post('/api/v1/visitor/message')
          .send(validData)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.an('object');
            res.body.reply.should.be.eq('AI could not give the correct answer.')
            done();
          });
      }).timeout(5000);

      it('should return default message if the intent reply not found in the database', (done) => {
        // Mock the external ai api for intent
        nock(config.intentEndpoint)
        .post('/intents', validData)
        .reply(200, unrecognisedIntentName);
        chai.request(app)
          .post('/api/v1/visitor/message')
          .send(validData)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.an('object');
            res.body.reply.should.be.eq('AI could not give the correct answer.')
            done();
          });
      }).timeout(5000);

      it('test botId required', (done) => {
        chai.request(app)
          .post('/api/v1/visitor/message')
          .send({ message: 'new message'})
          .end((err, res) => {
            console.log(res.body)
            res.should.have.status(400);
            res.body.should.be.an('object');
            res.body.message.botId[0].should.be.eq('The botId field is required.')
            done();
          });
      }).timeout(5000);
    
      it('test message is required while interacting with bot', (done) => {
        chai.request(app)
          .post('/api/v1/visitor/message')
          .send({ botId: 'gfdbbb6677'})
          .end((err, res) => {
            console.log(res.body)
            res.should.have.status(400);
            res.body.should.be.an('object');
            res.body.message.message[0].should.be.eq('The message field is required.')
            done();
          });
      }).timeout(5000);
    });
});
