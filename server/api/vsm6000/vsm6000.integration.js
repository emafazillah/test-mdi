'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newVsm6000;

describe('Vsm6000 API:', function() {
  describe('GET /api/vsm6000s', function() {
    var vsm6000s;

    beforeEach(function(done) {
      request(app)
        .get('/api/vsm6000s')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          vsm6000s = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(vsm6000s).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/vsm6000s', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/vsm6000s')
        .send({
          name: 'New Vsm6000',
          info: 'This is the brand new vsm6000!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newVsm6000 = res.body;
          done();
        });
    });

    it('should respond with the newly created vsm6000', function() {
      expect(newVsm6000.name).to.equal('New Vsm6000');
      expect(newVsm6000.info).to.equal('This is the brand new vsm6000!!!');
    });
  });

  describe('GET /api/vsm6000s/:id', function() {
    var vsm6000;

    beforeEach(function(done) {
      request(app)
        .get(`/api/vsm6000s/${newVsm6000._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          vsm6000 = res.body;
          done();
        });
    });

    afterEach(function() {
      vsm6000 = {};
    });

    it('should respond with the requested vsm6000', function() {
      expect(vsm6000.name).to.equal('New Vsm6000');
      expect(vsm6000.info).to.equal('This is the brand new vsm6000!!!');
    });
  });

  describe('PUT /api/vsm6000s/:id', function() {
    var updatedVsm6000;

    beforeEach(function(done) {
      request(app)
        .put(`/api/vsm6000s/${newVsm6000._id}`)
        .send({
          name: 'Updated Vsm6000',
          info: 'This is the updated vsm6000!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedVsm6000 = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedVsm6000 = {};
    });

    it('should respond with the updated vsm6000', function() {
      expect(updatedVsm6000.name).to.equal('Updated Vsm6000');
      expect(updatedVsm6000.info).to.equal('This is the updated vsm6000!!!');
    });

    it('should respond with the updated vsm6000 on a subsequent GET', function(done) {
      request(app)
        .get(`/api/vsm6000s/${newVsm6000._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let vsm6000 = res.body;

          expect(vsm6000.name).to.equal('Updated Vsm6000');
          expect(vsm6000.info).to.equal('This is the updated vsm6000!!!');

          done();
        });
    });
  });

  describe('PATCH /api/vsm6000s/:id', function() {
    var patchedVsm6000;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/vsm6000s/${newVsm6000._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Vsm6000' },
          { op: 'replace', path: '/info', value: 'This is the patched vsm6000!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedVsm6000 = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedVsm6000 = {};
    });

    it('should respond with the patched vsm6000', function() {
      expect(patchedVsm6000.name).to.equal('Patched Vsm6000');
      expect(patchedVsm6000.info).to.equal('This is the patched vsm6000!!!');
    });
  });

  describe('DELETE /api/vsm6000s/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/vsm6000s/${newVsm6000._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when vsm6000 does not exist', function(done) {
      request(app)
        .delete(`/api/vsm6000s/${newVsm6000._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
