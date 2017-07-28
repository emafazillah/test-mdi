'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var patientvsmCtrlStub = {
  index: 'patientvsmCtrl.index',
  show: 'patientvsmCtrl.show',
  create: 'patientvsmCtrl.create',
  upsert: 'patientvsmCtrl.upsert',
  patch: 'patientvsmCtrl.patch',
  destroy: 'patientvsmCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var patientvsmIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './patientvsm.controller': patientvsmCtrlStub
});

describe('Patientvsm API Router:', function() {
  it('should return an express router instance', function() {
    expect(patientvsmIndex).to.equal(routerStub);
  });

  describe('GET /api/patientvsms', function() {
    it('should route to patientvsm.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'patientvsmCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/patientvsms/:id', function() {
    it('should route to patientvsm.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'patientvsmCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/patientvsms', function() {
    it('should route to patientvsm.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'patientvsmCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/patientvsms/:id', function() {
    it('should route to patientvsm.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'patientvsmCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/patientvsms/:id', function() {
    it('should route to patientvsm.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'patientvsmCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/patientvsms/:id', function() {
    it('should route to patientvsm.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'patientvsmCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
