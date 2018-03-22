//angular.module('myAppnew').controller('MaterialController', ['$scope','ngMaterial', function($scope,ngMaterial) {
//  $scope.title1 = 'Button';
//  $scope.title4 = 'Warn';
//  $scope.isDisabled = true;
//  $scope.googleUrl = 'http://google.com';
//}]);

angular.module('myApp',['ngMaterial'])
.controller('MaterialController', function($scope) {
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;
  $scope.googleUrl = 'http://google.com';

});