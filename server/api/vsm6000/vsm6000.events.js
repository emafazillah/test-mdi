/**
 * Vsm6000 model events
 */

'use strict';

import {EventEmitter} from 'events';
var Vsm6000 = require('../../sqldb').Vsm6000;
var Vsm6000Events = new EventEmitter();

// Set max event listeners (0 == unlimited)
Vsm6000Events.setMaxListeners(0);

// Model events
var events = {
  afterCreate: 'save',
  afterUpdate: 'save',
  afterDestroy: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Vsm6000) {
  for(var e in events) {
    let event = events[e];
    Vsm6000.hook(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc, options, done) {
    Vsm6000Events.emit(event + ':' + doc._id, doc);
    Vsm6000Events.emit(event, doc);
    done(null);
  };
}

registerEvents(Vsm6000);
export default Vsm6000Events;
