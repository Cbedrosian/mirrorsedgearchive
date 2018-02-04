$(document).ready(function(){
	var skipped = 'false';
	if(Cookies.get('skip_intro') =='true') {
		skipped = 'true';
		$("#hero_text, #overview, .navbar").fadeTo( "slow" , 1);
		$(".card").css("border-width", "1px");
	}
	setTimeout(function(){
		if(($("#hero").get(0).paused) == true) {
			$("#hero").css("opacity", "0");
			//$("#hero").attr( 'poster', 'resources/img/homepage_banner.jpg');
			$("#hero_text, #overview, .navbar, #hero").fadeTo( "slow" , 1);
			$(".card").css("border-width", "1px");
		}
	}, 750);
	$("#hero").on("timeupdate", function(event){
		if(this.currentTime >= 1.5 && skipped == 'false') {
			$("#hero_text, #overview, .navbar").fadeTo( "slow" , 1);
			$(".card").css("border-width", "1px");
			Cookies.set("skip_intro", 'true', { expires: 1/24 });
		}
	});
	$('video').on('ended',function(){
		$("#hero").addClass("d-none");
		$("#heroSlides").removeClass("d-none");
		$("#media_copyright").fadeTo( "slow" , 1);
	});
});