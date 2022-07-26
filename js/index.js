console.log("Your index.js file is loaded corrently!");

$(function (){
    $("#Contact").on('click', function() {
        $('html, body').animate({
            scrollTop: $(".footercontent").offset().top
        }, 2000);
    });
})

$(function (){
    $("#contentButton").on('click', function() {
        $('html, body').animate({
            scrollTop: $(".myskills").offset().top
        }, 2000);
    });
})
