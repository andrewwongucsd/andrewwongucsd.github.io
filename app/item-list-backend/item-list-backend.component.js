'use strict';
angular.
  module('itemListBackend').
  component('itemListBackend', {
    templateUrl: 'app/item-list-backend/item-list-backend.template.html',
    controller: ['$http',function ItemListController($http) {
      var self = this;
      $http.get('data/andrewwongbackend.json').then(function(response){
        self.items = response.data;
      });
    }]
  });
