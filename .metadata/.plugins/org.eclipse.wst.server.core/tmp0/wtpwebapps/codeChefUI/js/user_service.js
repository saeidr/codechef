'use strict';
angular.module('myApp').factory('UserService', ['$http', '$q', function($http, $q){
    var REST_SERVICE_URI = 'http://localhost:8080/homeServiceCore/user/';
    var factory = {
        fetchAllUsers: fetchAllUsers,
        createUser: createUser,
        updateUser:updateUser,
        deleteUser:deleteUser,
        loginUser:loginUser,
        registerUser:registerUser,
        isUserNameExist:isUserNameExist,
        sendSMS:sendSMS
    };
    return factory;

    
    function fetchAllUsers() {
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

    /*sample function*/
    function createUser(user) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI, user)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while creating User');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }


    function updateUser(user, id) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI+id, user)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating User');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    function deleteUser(id) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI + id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deleting User');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    function loginUser(login){
    	 var deferred = $q.defer();
         $http.post(REST_SERVICE_URI, login)
         alert(JSON.stringify(login))
             .then(
             function (response) {
                 deferred.resolve(response.data);
             },
             function(errResponse){
                 console.error('Error while login User');
                 deferred.reject(errResponse);
             })
    }
    
    function registerUser(userInfo){
   	 	var deferred = $q.defer();
        $http.post(REST_SERVICE_URI, userInfo)
        //alert(JSON.stringify(userInfo))
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while register User');
                deferred.reject(errResponse);
            });
        return deferred.promise;
    }

    function isUserNameExist(userInfo){
    	var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+'checkUserName/', userInfo)
            .then(
            function (response) {	
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while register User');
                deferred.reject(errResponse);
            });
        return deferred.promise;
    }
    
    function sendSMS(userInfo){
    	var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+'sendSMS/', userInfo)
            .then(
            function (response) {	
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while register User');
                deferred.reject(errResponse);
            });
        return deferred.promise;
    }
}]);
