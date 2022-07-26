console.log("Your index.js file is loaded corrently!");

$("#Contact").click(function () {
    $('html, body').animate({
        scrollTo: $("footer").offset().top
    }, 2000);
    });