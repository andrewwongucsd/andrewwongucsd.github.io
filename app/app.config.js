'use strict';

angular.
  module('resumeApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/resume', {
          template: '<item-list></item-list>'
        }).
        when('/print', {
          template: '<item-list-print></item-list-print>'
        }).
        when('/projects/:projectId', {
          template: '<project-detail></project-detail>'
        }).
        otherwise('/');
    }
  ]).config(['$mdThemingProvider',function($mdThemingProvider) {
    $mdThemingProvider.theme('teal').backgroundPalette('teal');
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('blue').backgroundPalette('blue');
  }]
);
