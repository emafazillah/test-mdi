'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var vsm6000CtrlStub = {
  index: 'vsm6000Ctrl.index',
  show: 'vsm6000Ctrl.show',
  create: 'vsm6000Ctrl.create',
  upsert: 'vsm6000Ctrl.upsert',
  patch: 'vsm6000Ctrl.patch',
  destroy: 'vsm6000Ctrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var vsm6000Index = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './vsm6000.controller': vsm6000CtrlStub
});

describe('Vsm6000 API Router:', function() {
  it('should return an express router instance', function() {
    expect(vsm6000Index).to.equal(routerStub);
  });

  describe('GET /api/vsm6000s', function() {
    it('should route to vsm6000.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'vsm6000Ctrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/vsm6000s/:id', function() {
    it('should route to vsm6000.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'vsm6000Ctrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/vsm6000s', function() {
    it('should route to vsm6000.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'vsm6000Ctrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/vsm6000s/:id', function() {
    it('should route to vsm6000.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'vsm6000Ctrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/vsm6000s/:id', function() {
    it('should route to vsm6000.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'vsm6000Ctrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/vsm6000s/:id', function() {
    it('should route to vsm6000.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'vsm6000Ctrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
