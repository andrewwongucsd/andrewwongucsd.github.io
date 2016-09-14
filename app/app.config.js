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
        when('/redirect', {
          template: '<head><meta http-equiv="refresh" content="0; URL="http://www.github.com/andrewwongucsd"/></head>'
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
