$(document).ready(   //Code that executes when the document is ready   
	function(){     
alert('The document is ready!');   } );

// animations types
$("#section-one").fadeOut();
$("#section-one").fadeIn();

// selector       method   time
$("#section-one").fadeOut(1000); //Fade out over 1 second
$("#section-one").fadeIn(4000); //Fade in over 4 seconds

$("#section-one").slideUp(1000); //Fade out over 1 second
$("#section-one").slideDown(4000); //Fade in over 4 seconds

// animate css
$(".my-element").animate( 
	{   opacity: 0.25,   
		width: "70%" } , 2000 ); //animates .my-element id

$(".menu").show( function(){   
	$(".menu").animate( 
	 {	opacity: .5} ) })