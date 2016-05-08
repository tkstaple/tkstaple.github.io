// Javascript document

$(document).ready(function () {
console.log("ready");


//NAVBAR BACKGROUND SCROLL TRANSPARENCY
    /*
var a = $("nav").offset().top;


$(document).scroll(function () {
    if ($(this).scrollTop() > a) {
        $('nav').css("background", "rgba(70, 190, 251, 0.92)");
        //$('nav').css("background", "rgba(71, 0, 133, 0.92)");
    } else {
        $('nav').css("background", "transparent");
    }
});*/




// Parallax Effect
// Code based on http://www.javascriptkit.com/dhtmltutors/parallaxscrolling/

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
    setTimeout(f, 1000 / 60)
}

var triangle1 = document.getElementById('triangle1')
var triangle2 = document.getElementById('triangle2')
var triangle3 = document.getElementById('triangle3')
var triangle4 = document.getElementById('triangle4')
var triangle5 = document.getElementById('triangle5')
var triangle6 = document.getElementById('triangle6')

function parallaxtriangles() {
    var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
    triangle1.style.top = 470 + -scrolltop * 1.7 + 'px'
    triangle2.style.top = 100 + -scrolltop * .5 + 'px' 
    triangle3.style.top = 440 + -scrolltop * .75 + 'px' 
    triangle4.style.top = 70 + -scrolltop * 1.7 + 'px' 
    triangle5.style.top = 150 + -scrolltop * .5 + 'px' 
    triangle6.style.top = 600 + -scrolltop * .75 + 'px' 
}

window.addEventListener('scroll', function () { // on page scroll
requestAnimationFrame(parallaxtriangles) // call parallaxtriangles() on next available screen paint
}, false)



});