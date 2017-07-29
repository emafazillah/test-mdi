'use strict';
/*eslint no-process-env:0*/

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/testmdi-test'
  },
  /*
  sequelize: {
    uri: 'sqlite://',
    options: {
      logging: false,
      storage: 'test.sqlite',
      define: {
        timestamps: false
      }
    }
  }
  */
  sequelize: {
    uri: 'mysql://root:root@123@localhost:3306/integration_server',
    options: {
      logging: false,
      define: {
        timestamps: false
      }
    }
  }
};
