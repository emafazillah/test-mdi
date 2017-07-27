/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/vsm6000s              ->  index
 * POST    /api/vsm6000s              ->  create
 * GET     /api/vsm6000s/:id          ->  show
 * PUT     /api/vsm6000s/:id          ->  upsert
 * PATCH   /api/vsm6000s/:id          ->  patch
 * DELETE  /api/vsm6000s/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import {Vsm6000} from '../../sqldb';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      // eslint-disable-next-line prefer-reflect
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Vsm6000s
export function index(req, res) {
  return Vsm6000.findAll()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Vsm6000 from the DB
export function show(req, res) {
  return Vsm6000.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Vsm6000 in the DB
export function create(req, res) {
  return Vsm6000.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Vsm6000 in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }

  return Vsm6000.upsert(req.body, {
    where: {
      _id: req.params.id
    }
  })
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Vsm6000 in the DB
export function patch(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Vsm6000.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Vsm6000 from the DB
export function destroy(req, res) {
  return Vsm6000.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
