$(function () {

    // Counter

    $('.count').counterUp({
        delay: 10,
        time: 2000
    });


    //Mixit UP

    var mixer = mixitup('.mixitup');

    // Progress Bar
    $('#ios').LineProgressbar({
        percentage: 95
    });
    $('#demoprogressbar2').LineProgressbar({
        percentage: 74
    });
    $('#demoprogressbar3').LineProgressbar({
        percentage: 65
    });
    $('#demoprogressbar4').LineProgressbar({
        percentage: 25
    });

});
