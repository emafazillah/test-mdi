/**
 * Patientvsm model events
 */

'use strict';

import {EventEmitter} from 'events';
var Patientvsm = require('../../sqldb').Patientvsm;
var PatientvsmEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PatientvsmEvents.setMaxListeners(0);

// Model events
var events = {
  afterCreate: 'save',
  afterUpdate: 'save',
  afterDestroy: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Patientvsm) {
  for(var e in events) {
    let event = events[e];
    Patientvsm.hook(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc, options, done) {
    PatientvsmEvents.emit(event + ':' + doc._id, doc);
    PatientvsmEvents.emit(event, doc);
    done(null);
  };
}

registerEvents(Patientvsm);
export default PatientvsmEvents;
