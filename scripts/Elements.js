$(document).ready(function () {
    $("#arrow").click(function () { 
        $('body').animate({ scrollTop: $('#PollutionReasons').offset().top }, 'slow');
    });
    BoxAnimations()
    $(window).scroll(function () { BoxAnimations() });
    function BoxAnimations() {
        $("#box1").boxLoader({
            direction: "x",
            position: "50%",
            effect: "fadeIn",
            duration: "1s",
            windowarea: "50%"
        });

        $("#box2").boxLoader({
            direction: "x",
            position: "-50%",
            effect: "fadeIn",
            duration: "3s",
            windowarea: "50%"
        });

        $("#box3").boxLoader({
            direction: "y",
            position: "100%",
            effect: "none",
            duration: "2s",
            windowarea: "50%"
        });

        $("#box4").boxLoader({
            direction: "y",
            position: "100%",
            effect: "fadeIn",
            duration: "1s",
            windowarea: "50%"
        });

        $("#box5").boxLoader({
            direction: "x",
            position: "100%",
            effect: "fadeIn",
            duration: "3s",
            windowarea: "50%"
        });
        $("#box6").boxLoader({
            direction: "y",
            position: "100%",
            effect: "none",
            duration: "2s",
            windowarea: "50%"
        });
        $("#box7").boxLoader({
            direction: "none",
            position: "none",
            effect: "fadeIn",
            duration: "1s",
            windowarea: "50%"
        });

    }

})