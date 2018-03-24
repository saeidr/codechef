'use strict';

angular.module('myApp').controller('directionController', ['$scope','$location', function($scope,$location) {
	$scope.init=function(){
        $scope.lang="fa";/* default language*/
    }
	
	$scope.changeLang=function(selectedLang){
  	  alert($('html')[0].lang);
		 /*alert($scope.lang)*/
		  $scope.lang=selectedLang;
		  $scope.$apply();
		/* alert($scope.lang)*/
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
