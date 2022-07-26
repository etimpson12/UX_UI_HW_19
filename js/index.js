console.log("Your index.js file is loaded corrently!");

$("#Contact").on('click', function() {
        $('html, body').animate({
            scrollTop: $(".footercontent").offset().top
        }, 2000);
});
