'use strict';
angular.
  module('itemListFrontend').
  component('itemListFrontend', {
    templateUrl: 'app/item-list-frontend/item-list-frontend.template.html',
    controller: ['$http',function ItemListController($http) {
      var self = this;
      $http.get('data/andrewwongweb.json').then(function(response){
        self.items = response.data;
      });
    }]
  });
