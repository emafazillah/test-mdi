'use strict';

import angular from 'angular';
import SignupController from './signup.controller';

export default angular.module('testMdiApp.signup', [])
  .controller('SignupController', SignupController)
  .name;
