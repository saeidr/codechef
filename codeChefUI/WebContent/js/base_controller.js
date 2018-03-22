'use strict';

angular.module('myApp').controller('BaseController', ['$scope','$location','anchorSmoothScroll', function($scope,$location,anchorSmoothScroll) {
    var self = this;

    $scope.gotoElement = function (eID){
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash(eID);
        // call $anchorScroll()
        anchorSmoothScroll.scrollTo(eID);
      };
}]);
