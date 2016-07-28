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
        when('/projects/:projectId', {
          template: '<project-detail></project-detail>'
        }).
        otherwise('/resume');
    }
  ]).config(['$mdThemingProvider'],function($mdThemingProvider) {
    $mdThemingProvider.theme('dark-light-blue').backgroundPalette('light-blue').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  });
