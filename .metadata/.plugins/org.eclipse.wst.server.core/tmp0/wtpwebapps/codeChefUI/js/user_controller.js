'use strict';

angular.module('myApp').controller('UserController', ['$scope','$location','$anchorScroll', 'UserService', function($scope,$location,$anchorScroll, UserService) {
    var self = this;

    self.user={id:"",firstName:"",lastName:"",email:"",ssoId:""};
    self.users=[];
    self.isUserNameRegistered;
    self.userExist={id:"",firstName:"",lastName:"",email:"",ssoId:""};

    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;
    self.isUserNameExistA = isUserNameExistA;
    $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    
    fetchAllUsers();

    function fetchAllUsers(){
        UserService.fetchAllUsers()
            .then(
            function(d) {
                self.users = d;
            },
            function(errResponse){
                console.error('Error while fetching Users');
            }
        );
    }

    function createUser(user){
        UserService.createUser(user)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while creating User');
            }
        );
    }

    function updateUser(user, id){
        UserService.updateUser(user, id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while updating User');
            }
        );
    }

    function deleteUser(id){
        UserService.deleteUser(id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while deleting User');
            }
        );
    }

    function submit() {
    	self.user = {id:null,ssoId:$scope.ctrl.user.age,firstName:$scope.ctrl.user.name,lastName:$scope.ctrl.user.age,email:'dggfg'};
        if(self.user.id===null){
            console.log('Saving New User', self.user);
            createUser(self.user);
        }else{
            updateUser(self.user, self.user.id);
            console.log('User updated with id ', self.user.id);
        }
        reset();
    }
    
    $scope.closeWin=function(){
        $('#signin_frm').modal('hide');
    }
    
    $scope.closeRegistrationWin=function(){
        $('#registration_frm').modal('hide');
    }
    
    
    
    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.users.length; i++){
            if(self.users[i].id === id) {
                self.user = angular.copy(self.users[i]);
                break;
            }
        }
    }

    function remove(id){
        console.log('id to be deleted', id);
        if(self.user.id === id) {//clean form if the user to be deleted is shown there.
            reset();
        }
        deleteUser(id);
    }


    function reset(){
        self.user={id:null,username:'',address:'',email:''};
        $scope.myForm.$setPristine(); //reset Form
    }
    
    
    self.login={};
    $scope.loginUser=function(){
		    	self.login = {id:null,username:$scope.ctrl.login.userName,Password:$scope.ctrl.login.password};
		        if(self.login.id===null){
		            console.log('Saving New User',self.login);
		            loginUser(self.login);
		        }else{
		            console.log('User updated with id ', self.login.id);
		        	}
		    	}
    
    function loginUser(login){
        //	alert(JSON.stringify(self.login))
        //	alert(JSON.stringify(login))
            UserService.loginUser(login)
                .then(
                function(errResponse){
                    console.error('Error while login User');
                }
            );
    }


    self.register={};
    $scope.regsiterUser=function(){
    		   	self.register = {id:null,firstName:$scope.ctl.registration_frm.fname,lastName:$scope.ctl.registration_frm.lname,
    		   			ssoId:$scope.ctl.registration_frm.username,password:$scope.ctl.registration_frm.password,
		    			email:$scope.ctl.registration_frm.email};
		    	//alert(JSON.stringify(self.register));
		        if(self.register.id==null){
		            console.log('Saving New User',self.register);
		            registerUser(self.register);
		        }else{
		            console.log('User updated with id ', self.login.id);
		        }
	}
    
    function registerUser(userInformation){
               UserService.registerUser(userInformation)
                .then(
                function(errResponse){
                    console.error('Error while login User');
                }
            );
    }
    
   
  
    /*below function is for using on JS file*/
    $scope.isUserNameExist=function(){
    	isUserNameExistA();
    }
    
    

    /*$scope.isvalidUsername1="saeid";*/
    function isUserNameExistA(){
       self.userExist = {id:null,firstName:null,lastName:null,
	   			ssoId:$scope.ctl.registration_frm.username,password:null,email:null};
       UserService.isUserNameExist(self.userExist)
	        .then(function(result) {
	        	if(result==true){
	           		self.isUserNameRegistered="این نام کاربری قبلا ثبت شده است"
	        		$scope.isvalidUsername1=false;
	           	}else{
	        		$scope.isvalidUsername1=true;
	        		self.isUserNameRegistered="";
	          	}
	        },
	        function(errResponse){
	            console.error('Error while login User');
	        }
	    );
    }

    $scope.sendSMS=function(){
    	sendSMS();
    }
    
    /*$scope.isvalidUsername1="saeid";*/
    function sendSMS(){
       self.user = {id:null,firstName:null,lastName:null,
	   			ssoId:$scope.ctl.registration_frm.username,password:null,email:null};
       UserService.sendSMS(self.user)
	        .then(function(result){
	        	$scope.validationCode=result;
	        },
	        function(errResponse){
	            console.error('Error while login User');
	        }
	    );
    }
    
    
    /*
      	section for worker 
     */
    $scope.closeWorkerCategoryRegistrationWin=function(){
        $('#worker_category_selection_frm').modal('hide');
    }
    
   
    /*
     	end of section for worker
     */
    
    $scope.scrollTo=function(anchorLocation){
    	$location.hash(anchorLocation);
    	
    	$anchorScroll();
    }
    
    /*
     	anchor
     */
    
    /*
    	end of anchor
    */
}]);
