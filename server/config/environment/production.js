'use strict';
/*eslint no-process-env:0*/

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip: process.env.OPENSHIFT_NODEJS_IP
    || process.env.ip
    || undefined,

  // Server port
  port: process.env.OPENSHIFT_NODEJS_PORT
    || process.env.PORT
    || 8080,

  /*
  sequelize: {
    uri: process.env.SEQUELIZE_URI
      || 'sqlite://',
    options: {
      logging: false,
      storage: 'dist.sqlite',
      define: {
        timestamps: false
      }
    }
  }
  */
  sequelize: {
    uri: process.env.SEQUELIZE_URI
      || 'mysql://root:root123@localhost:3306/integration_server',
    options: {
      logging: false,
      define: {
        timestamps: false
      }
    }
  }
};
