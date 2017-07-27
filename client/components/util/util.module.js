'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('testMdiApp.util', [])
  .factory('Util', UtilService)
  .name;
