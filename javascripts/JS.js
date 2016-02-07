// Javascript document

$(document).ready(function () {
    console.log("ready");
    
    
    //NAVBAR BACKGROUND SCROLL TRANSPARENCY
    var a = $("nav").offset().top;

    $(document).scroll(function() {
        if ($(this).scrollTop() > a) {   
            $('nav').css("background", "rgba(70, 190, 251, 0.92)");
            //$('nav').css("background", "rgba(71, 0, 133, 0.92)");
        } else {
            $('nav').css("background", "transparent");
        }
    });
    
    
    
});