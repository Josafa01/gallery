$(function() { 
	$(".button").click(function(){
		let val = $(this).attr("data-filter");

		$('.button').removeClass('active');
		$(this).addClass('active');

		switch(val) {
			case val == "travel":
			$(".search").filter("."+val).show();
			$(".search").not("."+val).hide();
			$(".localize").animate({
				"margin-left":"-12%",
			}, 1000, "linear");	
			break;
			default:
			$(".search").filter("."+val).show();
			$(".search").not("."+val).hide();  

			$(".localize").css('margin-left','10%').animate({
				"opacity":"0",
			});

			$(".localize").css("visibility","visible").stop(true, true).delay(100).animate({
				"margin-left":"-12%",
				"opacity":"1",
			}, 1000, "linear");
		} 
	});
});