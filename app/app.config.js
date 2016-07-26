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
  ]);
