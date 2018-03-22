'use strict';
angular.module('myApp',['ngMaterial']).controller('MainController', ['$scope' , '$mdDialog' , function($scope,$mdDialog) {
	  $scope.title1 = 'Button';
	  $scope.title4 = 'Warn';
	  $scope.isDisabled = true;
	  $scope.googleUrl = 'http://google.com';
	  
	  
	  $scope.showAlert = function(ev) {
		    $mdDialog.show(
		      $mdDialog.alert()
		        .parent(angular.element(document.querySelector('#popupContainer')))
		        .clickOutsideToClose(true)
		        .title('This is an alert title')
		        .textContent('You can specify some description text in here.')
		        .ariaLabel('Alert Dialog Demo')
		        .ok('Got it!')
		        .targetEvent(ev)
		    );
		  };

}]);

