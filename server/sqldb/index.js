/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  //sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
  sequelize: new Sequelize(config.sequelize.uri)
};

// Insert models below
db.Patientvsm = db.sequelize.import('../api/patientvsm/patientvsm.model');
db.Thing = db.sequelize.import('../api/thing/thing.model');

module.exports = db;
