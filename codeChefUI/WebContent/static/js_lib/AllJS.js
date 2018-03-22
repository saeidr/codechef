$(document).ready(function () {
	/*
	 	menu of site event
	 */
		$("#registration_item_on_mnu").click(function(){
			$("#step_1_btn_selector").click();
		});
		
		$("#collaboration_item_on_mnu").click(function(){
			$("#step_1_worker_category_btn_selector").click();
		});
	
	/*
 		end of menu site event
	 */
	
	/*
	   js for registration panel
	 */
	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email.toLowerCase());
	}
	
	function isValidPhoneNumber(phone){
		var reg=/^09[0-9]{9}$/;
		return reg.test(phone); 
	}
	
	function isLimitToPersianCharacter(input) {
	    var re = /[\u0622-\u06CC]+/g;/*persian character*/
	    return re.test(input.toLowerCase());
	}
	
	var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });
	
	function setDisabled() {
		$('#reGetSMS').show();
	}
	
	
	
	$("#btnRegistrationWizardStepOne").click(function(){    
		$('#reGetSMS').hide();
		window.setTimeout(setDisabled, 30000);
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;
        if(	isLimitToPersianCharacter($("#txtFamily").val())==false
        	||  isLimitToPersianCharacter($("#txtName").val())==false
        	||  (isValidPhoneNumber($("#txtUsername").val())==false)
        	||  validateEmail($("#txtEmail").val())==false
        	||  angular.element($("#txtUsername")).scope().isvalidUsername1==false
        	||	$("#txtPassword").val().length<6
        	||  !($("#txtPassword").val()==$("#txtConfirmPassword").val())
        ){
        	isValid=false;
        }
		
        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }
        if (isValid){
        	angular.element($("#txtUsername")).scope().sendSMS();
        	nextStepWizard.removeAttr('disabled').trigger('click');
        }
    });
	
	
	$("#btnRegistrationWizardStepTwo").click(function(){    
		var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }
        
        if (isValid){
        	if($("#txtValidationCode").val()==angular.element($("#txtValidationCode")).scope().validationCode)
        	{
        		angular.element($("#txtEmail")).scope().regsiterUser();
        		$("#msgVerificationFalse").hide();
        		$("#btnRegistrationWizardStepTwo").hide();
        		$("#step_1_btn_selector").attr("disabled","disabled");
        		$("#step_2_btn_selector").attr("disabled","disabled");
            	nextStepWizard.removeAttr('disabled').trigger('click');
        	}else{
        		$("#msgVerificationFalse").show();
        	}
        }
    });
	
	
    $('div.setup-panel div a.btn-primary').trigger('click');
	
	$("#btn_open_register_section").click(function(){
		 $('#signin_frm').modal('hide');  
		 $('#registration_frm').modal('show');  
	 });
	
	$("#txtEmail").blur(function(){
		if(validateEmail($("#txtEmail").val())){
			$("#msgEmailNotValid").hide();
		}else{
			$("#msgEmailNotValid").show();
		}
	});
	
	$("#txtPassword").blur(function(){
		if($("#txtPassword").val().length<6){
			$("#msgPassLength").show();
		}else{
			$("#msgPassLength").hide();
		}
	});
	
	$("#txtName").blur(function(){
		if(isLimitToPersianCharacter($("#txtName").val())){
			$("#msgFnameNotPersian").hide();
		}else{
			$("#msgFnameNotPersian").show();
		}
	});
	
	$("#txtFamily").blur(function(){
		if(isLimitToPersianCharacter($("#txtFamily").val())){
			$("#msgLnameNotPersian").hide();
		}else{
			$("#msgLnameNotPersian").show();
		}
	});
	
	$("#txtConfirmPassword").blur(function(){
		if(!($("#txtPassword").val()==$("#txtConfirmPassword").val())){
			$("#passReType").show();
		}else{
			$("#passReType").hide();
		}
	});
	
	
	$("#txtUsername").blur(function(){
		if(isValidPhoneNumber($("#txtUsername").val())){
			$("#msgPhone").hide();
			angular.element($("#txtUsername")).scope().isvalidUsername1=false
			angular.element($("#txtUsername")).scope().isUserNameExist();
		}else{
			$("#msgPhone").show();
		}
	});
	
	$("#reGetSMS").click(function(){
		angular.element($("#txtUsername")).scope().sendSMS();
		$('#reGetSMS').hide();
		window.setTimeout(setDisabled, 30000);
	})
	$("#step_1_btn_selector").removeClass('btn-default').addClass('btn-primary');//on load set color
	
	/*$("#step-1").show();*/
	/*
	   end of js for registration panel
	 */
	 
	
	/*
	 registration popup for worker category selection
	 */
	
		$("#btnRegisterWorkerCategoryStep1").click(function(){
			angular.element($("#btnRegisterWorkerCategoryStep1")).scope().salam();
			 alert(JSON.stringify(angular.element($("#btnRegisterWorkerCategoryStep1")).scope().selectedMyCategories));
			 alert((angular.element($("#btnRegisterWorkerCategoryStep1")).scope().selectedMyCategories));
			$("#step_2_btn_category_selector").removeAttr('disabled').trigger('click');
		});
	
		$("#btnRegisterWorkerCategoryStep2").click(function(){
			if($("#txtprovince").val().length==0 ||
			   $("#txtcity").val().length==0 ||
			   $("#txtregion").val().length==0 ||
			   $("#txtAddress").val().length==0 ||
			   $("#txtTel1").val().length==0
			) {
				$("#msgEnterRequiredFieldWorker").show();
			}else{
				$("#msgEnterRequiredFieldWorker").hide();
				$("#step_3_btn_category_selector").removeAttr("disabled").trigger('click');
			}
			
		});
		
		$("#btnRegisterWorkerCategoryStep3").click(function(){
			$("#province1").html($("#txtprovince").val());
			$("#city1").html($("#txtcity").val());
			$("#region1").html($("#txtregion").val());
			$("#address1").html($("#txtAddress").val());
			$("#tel1").html($("#txtTel1").val());
			/*$("#service1").html($("#service").val());*/
			$("#step_4_btn_category_selector").removeAttr('disabled').trigger('click');
		});
		
		$("#btnRegisterWorkerCategoryStep4").click(function(){
			$("#step_5_btn_category_selector").removeAttr('disabled').trigger('click');
		});
		
		$("#btnGoToPrev_Step1").click(function(){
			$("#step_1_worker_category_btn_selector").click();
		});
		
		$("#btnGoToPrev_Step2").click(function(){
			$("#step_2_btn_category_selector").click();
		});
		
		$("#btnGoToPrev_Step3").click(function(){
			$("#step_3_btn_category_selector").click();
		});
	/*
	  end of registration popup for worker category selection
	 */
});























/*
	client captcha
*/
/*document.addEventListener("DOMContentLoaded", function() {
document.body.scrollTop; //force css repaint to ensure cssom is ready

var timeout; //global timout variable that holds reference to timer

var captcha = new $.Captcha({
    onFailure: function() {

        $(".captcha-chat .wrong").show({
            duration: 30,
            done: function() {
                var that = this;
                clearTimeout(timeout);
                $(this).removeClass("shake");
                $(this).css("animation");
                //Browser Reflow(repaint?): hacky way to ensure removal of css properties after removeclass
                $(this).addClass("shake");
                var time = parseFloat($(this).css("animation-duration")) * 1000;
                timeout = setTimeout(function() {
                    $(that).removeClass("shake");
                }, time);
            }
        });

    },

    onSuccess: function() {
        alert("CORRECT!!!");
    }
});
alert("uuu")
captcha.generate();
});*/
/*
end of client captcha
*/
