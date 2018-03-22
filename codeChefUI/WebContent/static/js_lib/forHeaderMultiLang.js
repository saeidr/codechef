var lang=$('html')[0].lang;
$.i18n.properties({
	name : 'Messages',
	path : './resources/',
	mode : 'both',
	language :"en" ,
	callback : function() {
		$(".navbar-collapse li a.home ").text(lblMnuHome);
		$(".navbar-collapse li a.services").text(lblMnuServices);
		$(".navbar-collapse li a.about").text(lblMnuAbout);
		$(".navbar-collapse li a.price").text(lblMnuPrice);
		$(".navbar-collapse li a.contactUs").text(lblMnuContactUs);
	}
})
if(lang=="en"){
	$('link[rel=stylesheet][href="./css/bootstrap-rtl.min.css"]').remove();
}