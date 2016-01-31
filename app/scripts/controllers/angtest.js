'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('myCtrl', function () {
  	alert("angtest.js");
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });