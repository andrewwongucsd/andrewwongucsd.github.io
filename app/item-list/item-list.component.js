'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'app/item-list/item-list.template.html',
    controller: ['$http',function PhoneListController($http) {
      var self = this;
      $http.get('data/andrewwong.json').then(function(response){
        self.items = response.data;
      });
    }]
  });
