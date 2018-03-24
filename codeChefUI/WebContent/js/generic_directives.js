'use strict';

angular.module("myApp", []).directive("bootstrapRtl", function() {
	var result;

	var lang = $('html')[0].lang;
	var isRtl = (lang == 'fa');

	if(ieRtl==true){
		result='<link rel="stylesheet" href="./css/bootstrap-rtl.min.css">';
	}else{
		result='';
	}
	
	return {
		template : result
	};
})
