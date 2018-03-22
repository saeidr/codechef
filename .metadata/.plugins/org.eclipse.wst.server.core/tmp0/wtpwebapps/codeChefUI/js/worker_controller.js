'use strict';

angular.module('myApp').controller('WorkerController', ['$scope','WorkerService', function($scope,WorkerService) {
	var self = this;
	self.categories=[];
	self.cities=[];
	self.CategoryId;
	self.selectedCategories=[];

	
	//fetchAllCity();
	
	function fetchAllCategory(){
		WorkerService.fetchAllCategory()
            .then(
            function(result) {
                self.categories = result;
            },
            function(errResponse){
                console.error('Error while fetching Users');
            }
        );
    }
	
	function fetchAllCity(){
		WorkerService.fetchAllCity()
        .then(
        function(result) {
            self.categories = result;
        },
        function(errResponse){
            console.error('Error while fetching Users');
        }
    );
	}
	
	fetchAllCategory();
	
	
	 $scope.workerSelectCategory=function(i){
	    	$('#select_category_for_coworkers').modal('show');
	    	if(i==1){
	    		$("#btnNextStepWorker2").show();
	    	}else if(i==2){
	    		$("#btnNextStepWorker3").show();
	    	}else if(i==3){
	    		$("#btnNextStepWorker4").show();
	    	}
	    }
	 
	 $scope.workerSelectSubCategory=function(category){
		self.CategoryId=category.id;
		$("#select_category_for_coworkers").modal('hide');
		$('#myModal2').modal('show');
	 }
	 
	 $scope.workerSelectSubCategory2=function(categories,category){
		 	var counter=false;
		 	
		 	/*alert(JSON.stringify(categories))*/
		 	
		 	for(var i = 0 ; i < categories.length ; i++){
		 		if(categories[i].id != category.id && categories[i].parentID==category.id){
		 			counter=true;
		 		}
		 	}
		 	
		 	if(counter==false){
		 		$('#myModal2').modal('hide');
		 	//	alert(JSON.stringify(category));
		 		self.selectedCategories.push((category));
		 		//alert($scope.selectedCategory)
		 	}
		 	self.CategoryId=category.id;
	 }
	 
	 
	 $scope.salam=function(category){
		/* alert(self.selectedCategories+" salam")
		 alert(JSON.stringify(self.selectedCategories+" salam"));*/
		 $scope.selectedMyCategories=self.selectedCategories;
	 }
	 
	 /*filter section*/
	 
	 $scope.parentNode=function(category){
		 return category.parentID==null;
	 }
	 
	 $scope.childNode=function(category){
		 return category.parentID==self.CategoryId;
	 }
	 
	 /*end of filter section*/
}]);
