console.log("Your index.js file is loaded corrently!");

$(function (){
    $("#Contact").on ('click', function () {
        var position = $("footer").offset().top;
        $('html, body').animate({
            scrollTop: position
        }, 2000);
     });
});