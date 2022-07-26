console.log("Your index.js file is loaded corrently!");

$(function (){
    $("#Contact").on('click', function() {
        $('html, body').animate({
            scrollTop: $("footer").offset().top
        }, 2000);
     });
})