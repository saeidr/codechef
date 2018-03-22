'use strict';
angular.module('myApp').factory('WorkerService', ['$http', '$q', function($http, $q){
    var REST_SERVICE_URI = 'http://localhost:8080/homeServiceCore/workerCategory/';
    var factory = {
    		fetchAllCategory: fetchAllCategory,
    		fetchAllCity:fetchAllCity
    };
    return factory;

    function fetchAllCategory() {
    	var deferred = $q.defer();
        $http.get(REST_SERVICE_URI)
            .then(
            function (response) {
            	deferred.resolve(response.data);
            },
            function(errResponse){
            	console.error('Error while fetching Users');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
   
    function fetchAllCity() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI+'getCities/')
            .then(
            function (response) {
            	deferred.resolve(response.data);
            },
            function(errResponse){
            	console.error('Error while fetching Users');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
}]);
