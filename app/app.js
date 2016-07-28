
var resumeAppJs = angular.module('resumeApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

resumeAppJs.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-light-blue').backgroundPalette('light-blue').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});
