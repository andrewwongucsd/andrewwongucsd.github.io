'use strict';
angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'app/item-list/item-list.template.html',
    controller: ['$http',function ItemListController($http) {
      var self = this;
      $http.get('data/andrewwong.json').then(function(response){
        self.items = response.data;
      });
    }]
  });
