var circle = document.querySelector(".circle");
var fontcolor = document.querySelector(".font");
var background = document.querySelector(".container");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var circle1 = document.getElementById("circlephoto");
var backgroundImage = document.getElementById("circlebackground");
var radius = document.getElementById("radius");
var speed = document.getElementById("spd");

onchange = function(){
	circle.style.backgroundColor = color1.value;
	fontcolor.style.backgroundColor = color2.value;
	circle.style.width = radius.value + "px";
	circle.style.height = radius.value + "px";
	

}
speed.addEventListener("input" , function(){
	circle.style.animationDuration = spd.value + "s";
});
backgroundImage.addEventListener("input",function () {
    fontcolor.style.backgroundImage="url(\"" +   backgroundImage.value +   "\")";
    fontcolor.style.backgroundSize = "cover";

 
});
circle1.addEventListener("input",function () {
    circle.style.backgroundImage="url(\"" +   circle1.value +   "\")";
    circle.style.backgroundSize = "cover";
 
});
