'use strict';

angular.module('myApp').controller('directionController', ['$scope','$location', function($scope,$location) {
		
	$scope.lang="fa";//default language
	
	$scope.changeLang=function(selectedLang){
		 $scope.lang=selectedLang;
   }
	
}]);

angular.module('myApp').controller('scrollController', ['$scope','$location','anchorSmoothScrollService', function($scope,$location,anchorSmoothScrollService) {
    var self = this;

    $scope.gotoElement = function (eID){
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash(eID);
        // call $anchorScroll()
        anchorSmoothScrollService.scrollTo(eID);
      };
      
      
}]);
