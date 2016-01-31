'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('geoCtrl', function () {
  	alert("geomap.js");
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });