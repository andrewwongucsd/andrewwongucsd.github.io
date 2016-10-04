'use strict';
angular.
  module('itemListData').
  component('itemListData', {
    templateUrl: 'app/item-list-data/item-list-data.template.html',
    controller: ['$http',function ItemListController($http) {
      var self = this;
      $http.get('data/andrewwongdata.json').then(function(response){
        self.items = response.data;
      });
    }]
  });
