'use strict';
angular.
  module('itemListPrint').
  component('itemListPrint', {
    templateUrl: 'app/item-list-print/item-list-print.template.html',
    controller: ['$http',function ItemListController($http) {
      var self = this;
      self.s = function s(){
        var r = document.getElementsByClassName("radio");
        console.log(r);
        alert(r);
      };
      $http.get('data/andrewwong.json').then(function(response){
        self.items = response.data;
      });
    }]
  });
