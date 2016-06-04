// Javascript document

$(document).ready(function () {
    console.log("ready");





    // Parallax Effect
    // Code based on http://www.javascriptkit.com/dhtmltutors/parallaxscrolling/
    
    // INDEX -----------------------------------------------

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
        setTimeout(f, 1000 / 60);
    }

    var triangle1 = document.getElementById('triangle1');
    var triangle2 = document.getElementById('triangle2');
    var triangle3 = document.getElementById('triangle3');

    function parallaxtriangles() {
        var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically 
        triangle1.style.top = 470 + -scrolltop * 1.7 + 'px';
        triangle2.style.top = 100 + -scrolltop * .5 + 'px';
        triangle3.style.top = 440 + -scrolltop * .75 + 'px';
    }

    window.addEventListener('scroll', function () { // on page scroll
        requestAnimationFrame(parallaxtriangles) // call parallaxtriangles() on next available screen paint
    }, false)
    
    
    
    
    
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
        setTimeout(f, 1000 / 60);
    }

    var triangle4 = document.getElementById('triangle4');
    var triangle5 = document.getElementById('triangle5');
    var triangle6 = document.getElementById('triangle6');

    function parallaxtriangles() {
        var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically 
        triangle4.style.top = 470 + -scrolltop * 1.7 + 'px';
        triangle5.style.top = 100 + -scrolltop * .5 + 'px';
        triangle6.style.top = 440 + -scrolltop * .75 + 'px';
    }

    window.addEventListener('scroll', function () { // on page scroll
        requestAnimationFrame(parallaxtriangles) // call parallaxtriangles() on next available screen paint
    }, false)
    
    
    
    
    
    
    
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
        setTimeout(f, 1000 / 60);
    }

    var triangle7 = document.getElementById('triangle7');
    var triangle8 = document.getElementById('triangle8');
    var triangle9 = document.getElementById('triangle9');

    function parallaxtriangles() {
        var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically 
        triangle7.style.top = 470 + -scrolltop * 1.7 + 'px';
        triangle8.style.top = 100 + -scrolltop * .5 + 'px';
        triangle9.style.top = 440 + -scrolltop * .75 + 'px';
    }

    window.addEventListener('scroll', function () { // on page scroll
        requestAnimationFrame(parallaxtriangles) // call parallaxtriangles() on next available screen paint
    }, false)

    
    
    /* CREATIVE WORK -----------------------------------------------

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
        setTimeout(f, 1000 / 60);
    }

    var triangle4 = document.getElementById('triangle4');
    var triangle5 = document.getElementById('triangle5');
    var triangle6 = document.getElementById('triangle6');

    function parallaxtriangles() {
        var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically 
        triangle5.style.top = 150 + -scrolltop * .25 + 'px';
        triangle4.style.top = 900 + -scrolltop * .6 + 'px';
        triangle6.style.top = 470 + -scrolltop * .4 + 'px';
    }

    window.addEventListener('scroll', function () { // on page scroll
        requestAnimationFrame(parallaxtriangles) // call parallaxtriangles() on next available screen paint
    }, false)

    
    
    

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
        setTimeout(f, 1000 / 60);
    }

    var triangle7 = document.getElementById('triangle7');
    var triangle8 = document.getElementById('triangle8');
    var triangle9 = document.getElementById('triangle9');

    function parallaxtriangles() {
        var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically 
        triangle7.style.top = 700 + -scrolltop * .4 + 'px';
        triangle8.style.top = 120 + -scrolltop * .25 + 'px';
        triangle9.style.top = 500 + -scrolltop * .6 + 'px';
    }

    window.addEventListener('scroll', function () { // on page scroll
        requestAnimationFrame(parallaxtriangles) // call parallaxtriangles() on next available screen paint
    }, false)
    */
    
    
    
    
    
    
    
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
    
});