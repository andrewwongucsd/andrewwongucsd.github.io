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
        when('/frontend', {
          template: '<item-list-frontend></item-list-frontend>'
        }).
        when('/backend', {
          template: '<item-list-backend></item-list-backend>'
        }).
        when('/data', {
          template: '<item-list-data></item-list-data>'
        }).
        when('/redirect', {
          template: '<redirect></redirect>'
        }).
        when('/projects/:projectId', {
          template: '<project-detail></project-detail>'
        }).
        otherwise('/redirect');
    }
  ]).config(['$mdThemingProvider',function($mdThemingProvider) {
    $mdThemingProvider.theme('dark-teal').backgroundPalette('teal').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  }]
);
