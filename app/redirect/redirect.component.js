'use strict';
angular.
  module('redirect').
  component('redirect', {
    templateUrl: 'app/redirect/redirect.template.html',
    controller: ['$http',function RedirectController($http) {
      $window.location.href = "https://github.com/andrewwongucsd";
      console.log('redirecing');
    }]
  });
