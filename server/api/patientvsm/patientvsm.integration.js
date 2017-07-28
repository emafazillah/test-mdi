'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newPatientvsm;

describe('Patientvsm API:', function() {
  describe('GET /api/patientvsms', function() {
    var patientvsms;

    beforeEach(function(done) {
      request(app)
        .get('/api/patientvsms')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          patientvsms = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(patientvsms).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/patientvsms', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/patientvsms')
        .send({
          name: 'New Patientvsm',
          info: 'This is the brand new patientvsm!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newPatientvsm = res.body;
          done();
        });
    });

    it('should respond with the newly created patientvsm', function() {
      expect(newPatientvsm.name).to.equal('New Patientvsm');
      expect(newPatientvsm.info).to.equal('This is the brand new patientvsm!!!');
    });
  });

  describe('GET /api/patientvsms/:id', function() {
    var patientvsm;

    beforeEach(function(done) {
      request(app)
        .get(`/api/patientvsms/${newPatientvsm._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          patientvsm = res.body;
          done();
        });
    });

    afterEach(function() {
      patientvsm = {};
    });

    it('should respond with the requested patientvsm', function() {
      expect(patientvsm.name).to.equal('New Patientvsm');
      expect(patientvsm.info).to.equal('This is the brand new patientvsm!!!');
    });
  });

  describe('PUT /api/patientvsms/:id', function() {
    var updatedPatientvsm;

    beforeEach(function(done) {
      request(app)
        .put(`/api/patientvsms/${newPatientvsm._id}`)
        .send({
          name: 'Updated Patientvsm',
          info: 'This is the updated patientvsm!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedPatientvsm = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPatientvsm = {};
    });

    it('should respond with the updated patientvsm', function() {
      expect(updatedPatientvsm.name).to.equal('Updated Patientvsm');
      expect(updatedPatientvsm.info).to.equal('This is the updated patientvsm!!!');
    });

    it('should respond with the updated patientvsm on a subsequent GET', function(done) {
      request(app)
        .get(`/api/patientvsms/${newPatientvsm._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let patientvsm = res.body;

          expect(patientvsm.name).to.equal('Updated Patientvsm');
          expect(patientvsm.info).to.equal('This is the updated patientvsm!!!');

          done();
        });
    });
  });

  describe('PATCH /api/patientvsms/:id', function() {
    var patchedPatientvsm;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/patientvsms/${newPatientvsm._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Patientvsm' },
          { op: 'replace', path: '/info', value: 'This is the patched patientvsm!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedPatientvsm = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedPatientvsm = {};
    });

    it('should respond with the patched patientvsm', function() {
      expect(patchedPatientvsm.name).to.equal('Patched Patientvsm');
      expect(patchedPatientvsm.info).to.equal('This is the patched patientvsm!!!');
    });
  });

  describe('DELETE /api/patientvsms/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/patientvsms/${newPatientvsm._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when patientvsm does not exist', function(done) {
      request(app)
        .delete(`/api/patientvsms/${newPatientvsm._id}`)
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
