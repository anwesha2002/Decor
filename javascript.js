/*let slideindex = 1;
slideshow(slideindex);
function currentslide(n){
	slideshow(slideindex=n);
}
function plusslide(n){
	slideshow(slideindex+ = n);
}
function slideshow(n){
	let i;
	let slides = document.getElementsByClassName("carousel-item");
	let dots = document.getElementsByClassName("dot");
	if(n>slides.length){slideindex=1}
	if(n<1){slideindex=slides.length}
	for(i=0;i<dots.length;i++)
		{
			dots[i].className = dots[i].className.replace("active","");
		}
	dots[slideindex-1].className+="active";
}*/

$(document).ready(function(){
	$("#seemore").click(function(){
		$("#bedd").slideToggle("show");
	});
});
$(document).ready(function(){
	$("#seemore").click(function(){
		$("#living").slideToggle("show");
	});
});
$(document).ready(function(){
	$("#seemore").click(function(){
		$("#kitchen1").slideToggle("show");
	});
});
$(document).ready(function(){
	$("#seemore").click(function(){
		$("#bathroom1").slideToggle("show");
	});
});

/*var waypoint = new Waypoint({
  element: document.getElementById('px-offset-waypoint'),
  handler: function(direction) {
    notify('I am 20px from the top of the window')
  },
  offset: 20 
})*/

$(document).ready(function(){
	$("#wwr-img").waypoint(function(direction){
		$("#wwr-img").addClass('animate__animated animate__bounceIn');
	},{
		offset : "80%"
	});
});
$(document).ready(function(){
	$("#para1").waypoint(function(direction){
		$("#para1").addClass('animate__animated animate__zoomInRight');
	},{
		offset : "80%"
	});
});
$(document).ready(function(){
	$("#blog1-img").waypoint(function(direction){
		$("#blog1-img").addClass('animate__animated animate__rotateInDownLeft');
	},{
		offset : "80%"
	});
});
$(document).ready(function(){
	$("#blog-para").waypoint(function(direction){
		$("#blog-para").addClass('animate__animated animate__rotateInDownRight');
	},{
		offset : "80%"
	});
});
$(document).ready(function(){
	$("#blog2-img").waypoint(function(direction){
		$("#blog2-img").addClass('animate__animated animate__rotateInDownLeft');
	},{
		offset : "80%"
	});
});
$(document).ready(function(){
	$("#blog-para2").waypoint(function(direction){
		$("#blog-para2").addClass('animate__animated animate__rotateInDownRight');
	},{
		offset : "80%"
	});
});
$(document).ready(function(){
	$("#excellence h4").waypoint(function(direction){
		$("#excellence h4").addClass('animate__animated animate__slideInRight');
	},{
		offset : "70%"
	});
});
$(document).ready(function(){
	$("#creative h4").waypoint(function(direction){
		$("#creative h4").addClass('animate__animated animate__slideInRight');
	},{
		offset : "70%"
	});
});
$(document).ready(function(){
	$("#trust h4").waypoint(function(direction){
		$("#trust h4").addClass('animate__animated animate__slideInRight');
	},{
		offset : "60%"
	});
});$(document).ready(function(){
	$("#payment h4").waypoint(function(direction){
		$("#payment h4").addClass('animate__animated animate__slideInRight');
	},{
		offset : "60%"
	});
});
$(document).ready(function(){
	$("#project").waypoint(function(direction){
		$("#project").addClass('animated counter');
	},{
		offset : "80%"
	});
});
$(document).ready(function(){
	$("#designer").waypoint(function(direction){
		$("#designer").addClass('animated counter1');
	},{
		offset : "80%"
	});
});
$(document).ready(function(){
	$("#clients").waypoint(function(direction){
		$("#clients").addClass('animated counter1');
	},{
		offset : "80%"
	});
});
$(document).ready(function(){
	$("#country").waypoint(function(direction){
		$("#country").addClass('animated counter1');
	},{
		offset : "80%"
	});
});