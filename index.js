


$(document).ready(function () {

    // When candles are clicked
    $(".candles").on("click", function () {
        
        // Hide flames
        $(".flame, .flame2, .flame3").animate({
            opacity: 0
        }, "fast");

        // Move text slightly up & show it
        $(".text").animate({
            top: "-90px",
            opacity: 1
        }, "fast");
    });

});

