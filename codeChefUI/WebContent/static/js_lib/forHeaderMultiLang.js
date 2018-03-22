var lang=$('html')[0].lang;
$.i18n.properties({
	name : 'Messages',
	path : './resources/',
	mode : 'both',
	language :lang ,
	callback : function() {
		$(".navbar-collapse li a.home ").text(lblMnuHome);
		$(".navbar-collapse li a.services").text(lblMnuServices);
		$(".navbar-collapse li a.about").text(lblMnuAbout);
		$(".navbar-collapse li a.price").text(lblMnuPrice);
		$(".navbar-collapse li a.contactUs").text(lblMnuContactUs);
	}
})