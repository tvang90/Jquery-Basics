$(document).ready(function(){
	$("h1").animate({
		opacity: 0.50,
		fontSize: 50,

	}, 1000)

	$("h1").click(function(){
		$("#state").hide("slow", function() {
		$("#michigan").hide("slow");

  });

	$("#MI").click(function(){
		$("#msu").fadeOut("3000",function(){
		$("#michigan").show("slow")
		});

	});

	$("#cali").click(function(){
		$("#calistate").fadeOut("3000",function(){
		});
	});

	$("#nyc").click(function(){
		$("#nycstate").fadeOut("3000",function(){
	
		});

	});
});

});