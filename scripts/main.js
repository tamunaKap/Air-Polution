
$(document).ready(function () {
    var years = [2010, 2011, 2012, 2013, 2014]
    var elementAccordingYears = [{
        name: "PM",
        fullName: " მტვერი",
        limit: 0.15,
        dataTb: [0.73, 0.6, 0.48, 0.36, 0.28],
        dataQ: [0.8, 0.98, 1.1, 0.76, 0.74],
        dataBat: [1.15, 0.78, 0.42, 0.5],
        dataZes: [0.47, 0.5, 0.46, 0.45, 0.53],
        text: "იწვევს ქვედა სასუნთქი გზების მწვავე ინფექციურ დაავადებებსა, რასაც ხშირად უკავშირდება ადრეული ასაკის ბავშვების სიკვდილიანობა. ფილტვის ქრონიკული ობსტრუქციული დაავადებისა და ფილტვის კიბოს განვითარების ძირითად რისკ-ფაქტორს მოზრდილებში."
    }, {
        name: "SO2",
        fullName: " გოგირდის დიოქსიდი",
        limit: 0.05,
        dataTb: [0.134, 0.13, 0.12, 0.099, 0.1],
        dataQ: [0.17, 0.2, 0.21, 0.16, 0.17],
        dataBat: [0.05, 0.08, 0.14, 0.12],
        dataZes: [0.12, 0.13, 0.13, 0.13, 0.14],
        text: "ყველაზე ხშირად სასუნთქ სისტემას აავადებს, მაგრამ ხშირია სხვა ორგანოთა დაზიანებებიც."
    }, {
        name: "NO2",
        fullName: " აზოტის დიოქსიდი ",
        limit: 0.04,
        dataTb: [0.092, 0.12, 0.08, 0.088, 0.077],
        dataQ: [0.1, 0.14, 0.14, 0.12, 0.12],
        dataBat: [0.1, 0.16, 0.15, 0.18],
        dataZes: [0.04, 0.05, 0.05, 0.05, 0.05],
        text: "იწვევს სასუნთქი გზების დაზიანებას, აძლიერებს ასთმის შეტევებს"
    }, {
        name: "CO",
        fullName: "ნახშირჟანგი",
        limit: 3,
        dataTb: [2.7, 3, 2.5, 2.1, 2.96],
        dataQ: [4.3, 4.3, 5.2, 4.1, 3],
        dataBat: [5.9, 3.2, 3.7, 3.8],
        dataZes: [0, 1.7, 1.3, 1.4, 1.4],
        text: "ყველაზე ხშირად სასუნთქ სისტემას აავადებს, მაგრამ ხშირია სხვა ორგანოთა <a href='http://api.jquery.com/jQuery.getJSON/'> დაზიანებებიც</a>"
    }];
    var cars = ["691421", "742173", "802455", "874928", "889000"]

    var BackImages = [
        {
            url: "",
            status: "visible"
        },
        {
            url: "",
            status: "visible"
        },
        {
            url: "",
            status: "visible"
        },
        {
            url: "",
            status: "visible"
        },
        {
            url: "",
            status: "visible"
        }
    ]
    var deseaseResons = [
        {
            img: "images/oldCar.png",
            text: "[ქვეყანაში ტრანსპორტის უდიდესი ნაწილი 15 წელზე მეტი ასაკისაა]"
        },
        {
            img: "images/teq.png",
            text: "[2004 წლიდან აღარ ტარდება ტექდათვალიერება]"
        },
        {
            img: "images/fuel.png",
            text: "[ქვეყანაში დღემდე არ მოწმდება საწვავის ხარისხი]"
        },
        {
            img: "images/airControl.png",
            text: "[დღემდე არ ხდება ატმოსფერული ჰაერის სრულყოფილი ანალიზი]"
        }

    ]
    var BallTextesAccordingYear = [" მტვრის რაოდენობა ზღვრულად დასაშვებ ნორმას დაახლოებით 2-ჯერ აღემატება.\
    გოგირდის დიოქსიდის რაოდენობა ნორმაზე 0.5-ჯერ მეტია.\
    ნახშირჟანგის რაოდენობა ნორმის ფარგლებშია.\
    აზოტის დიოქსიდის რაოდენობა ნორმას, დაახლოებით, 2-ჯერ აჭარბებს. \
    ", " მტვრის რაოდენობა ზღვრულად დასაშვებ ნორმას 2.4-ჯერ აღემატება.\
    გოგირდის დიოქსიდის რაოდენობა ნორმაზე 2-ჯერ მეტია.\
    ნახშირჟანგის რაოდენობა ნორმასთან შედარებით 1.5-ჯერ ნაკლებია.\
    აზოტის დიოქსიდის რაოდენობა ნორმას 2-ჯერ აჭარბებს.\
    ოზონის შემცველობა ჰაერში 2-ჯერ მეტია ზღვრულად დასაშვებ ნორმასთან შედარებით.",
   "მტვრის რაოდენობა ზღვრულად დასაშვებ ნორმას 3.2-ჯერ აღემატება.\
    გოგირდის დიოქსიდის რაოდენობა ნორმაზე 2.5-ჯერ მეტია.\
    ნახშირჟანგის რაოდენობა ნორმასთან შედარებით 1.2-ჯერ ნაკლებია.\
    აზოტის დიოქსიდის რაოდენობა ნორმას 2-ჯერ აჭარბებს. \
    ", "მტვრის რაოდენობა ზღვრულად დასაშვებ ნორმას 4-ჯერ აღემატება. \
    გოგირდის დიოქსიდის რაოდენობა ნორმაზე 2.6-ჯერ მეტია.\
    ნახშირჟანგის რაოდენობა ნორმას შეესაბამება.\
    აზოტის დიოქსიდის რაოდენობა ნორმას 3-ჯერ აღემატება.\
    ოზონის შემცველობა ჰაერში 0.5-ჯერ მეტია ზღვრულად დასაშვებ ნორმასთან შედარებით.\
    აზოტის ოქსიდის რაოდენობა ზღვრულად დასაშვებ ნორმაზე 6-ჯერ ნაკლებია.",
   " მტვრის რაოდენობა ზღვრულად დასაშვებ ნორმას, დაახლოებით, 5-ჯერ აღემატება.\
    გოგირდის დიოქსიდის რაოდენობა ნორმაზე 2.68-ჯერ მეტია.\
    ნახშირჟანგის რაოდენობა ნაკლებია.\
    აზოტის დიოქსიდის რაოდენობა ნორმას 2.3-ჯერ აღემატება.\
    ოზონის შემცველობა ჰაერში 2-ჯერ მეტია ზღვრულად დასაშვებ ნორმასთან შედარებით.\
    აზოტის ოქსიდის რაოდენობა ზღვრულად დასაშვებ ნორმაზე 3-ჯერ ნაკლებია."]
    var carDust = ["images/carsLinedust.png", "images/carsLinedust2.png",
        "images/carsLinedust3.png", "images/carsLinedust4.png"]
    var countries = ["თბილისი", "ქუთაისი", "ბათუმი", "ზესტაფონი"]

    /*variables*/
    document.getElementById('audio').pause();
    var visibleCountry = 0
    var countryLeftArrow = $("#country >p >span:first-child")
    var countryRightArrow = $("#country >p >span:last-child")
    var countryName = $("#country >p >span:nth-child(2)")
    var text = "";
    var windowWidth = $(window).width() - 200
    var marginTop = 20
    var marginLeft = 20
    var result = null
    var clickedYearIndex = -1
    var carDustIndex = 0
    document.getElementById('audio').volume = 0.5;
    //$("body >section:not(:first-child),footer ,nav").hide(); 
    //setTimeout(function () {
    //    $("#loader").fadeOut();
    //    $("#loader").remove();
    //    $("body >section:not(#loader), footer").fadeIn();
    //    $("body >nav").fadeIn();
    //    $("html").css("background-color", "white")
    //    ElementRandomizer();
    //    BoxAnimations()
    //    document.getElementById('audio').play();
    //}, 5000)

    $(".sound >img").click(function () {
        if ($(this).attr("src").indexOf("soundOn") != -1) {
            document.getElementById('audio').volume = 0;
            $(this).attr("src", "images/soundOff.png")
        }
        else {
            document.getElementById('audio').volume = 0.7;
            $(this).attr("src", "images/soundOn.png")
        }
    });
    setInterval(function () {
        if (carDustIndex == carDust.length) {
            carDustIndex = 0
        }
        $("#carsLine >img").attr("src", carDust[carDustIndex])
        carDustIndex++
    }, 1000)
    /*content state*/
    $("#popup").hide();
    $('#typingInfo').hide()
    $("#elementsTimeLine").width(windowWidth)
    var containerWidth = $("#elementsTimeLine").width();
    $("#reazons >div:first-child p:first-child").text(deseaseResons[0].text)
    $("#reazons >div:first-child img:first-child").attr("src", deseaseResons[0].img)
    for (i = 0; i < years.length; i++) {
        $("#yearsTimeLine").append("<span>" + years[i] + "</span>")
    }


    $(".nextReason").click(function () {
        var dataId = $("#reazons").attr("data-reasonId")
        var nextId = 1 + parseInt(dataId)
        if (dataId == 3) {
            nextId = 0

        }
        var newElement = "<div style='margin-left:200px;'>  <p>" + deseaseResons[nextId].text + " </p>\
                            <div class='col-lg-12 col-md-12 col-xs-12 col-sm-12'>\
                                <img src='" + deseaseResons[nextId].img + "' />\
                            </div></div>"
        // $("#reazons >p:first-child").text(deseaseResons[nextId].text)
        // $("#reazons >div img:first-child").attr("src", deseaseResons[nextId].img)
        //$("#reazons >div:first-child").width; 
        $("#reazons >div:first-child").animate({
            "margin-left": "-=200",
        }, 500, function () {

            $(this).fadeOut()
            $(this).remove()
            $("#reazons").prepend(newElement);
            $("#reazons >div:first-child").animate({
                "margin-left": "-=200",
            })
        });

        $("#reazons").attr("data-reasonId", nextId)
    });

    /*functions & events*/

    /*next page arrow click*/
    $("#Introduction").on('click', 'aside', function () {
        var nextPageId = $(this).data("nextpageid")
        $('html, body').animate({ scrollTop: $('#' + nextPageId).offset().top }, 'slow');
    });
    $(".result").click(function () {
        var thisDataNextId = $(this).attr("data-nextdivid")
        $('html, body').animate({ scrollTop: $('#' + thisDataNextId).offset().top }, 'slow');
    });
    /*box loading*/


    $(window).scroll(function () {

        BoxAnimations()
    });
    function BoxAnimations() {


        //$("#box1").boxLoader({
        //    direction: "y",
        //    position: "100%",
        //    effect: "none",
        //    duration: "2s",
        //    windowarea: "90%"
        //});

        $("#box2").boxLoader({
            direction: "x",
            position: "100%",
            effect: "fadeIn",
            duration: "3s",
            windowarea: "50%"

        });

        $("#box3").boxLoader({
            direction: "x",
            position: "-50%",
            effect: "fadeIn",
            duration: "3s",
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
            direction: "x",
            position: "-50%",
            effect: "fadeIn",
            duration: "3s",
            windowarea: "50%"
            //direction: "y",
            //position: "100%",
            //effect: "none",
            //duration: "2s",
            //windowarea: "50%"
        });
        $("#box7").boxLoader({
            direction: "none",
            position: "none",
            effect: "fadeIn",
            duration: "1s",
            windowarea: "50%"
        });
    }

    $(countryRightArrow).click(function () {

        countryName.html("")
        $("#balls").html("")
        ElementRandomizer();
        $("#yearsTimeLine > span:last-child").show()
        if (visibleCountry + 1 == countries.length) {

            visibleCountry = 0
        }
        else {
            visibleCountry = visibleCountry + 1
        }
        if (visibleCountry == 2) {
            $("#yearsTimeLine > span:last-child").hide()
        }
        countryName.html(countries[visibleCountry] + " ")
    });
    $(countryLeftArrow).click(function () {

        countryName.html("")

        $("#balls").html("")
        ElementRandomizer();
        $("#yearsTimeLine > span:last-child").show()
        if (visibleCountry - 1 == -1) {

            visibleCountry = countries.length - 1
        }
        else {
            visibleCountry = visibleCountry - 1
        }
        if (visibleCountry == 2) {
            $("#yearsTimeLine > span:last-child").hide()
        }
        countryName.html(countries[visibleCountry] + " ")
    });



    $(".closeCar").click(function () { $("#popup").hide(); });

    $("#yearsTimeLine").on('click', 'span', function () {
        visibleCountry = 0
        text = "";
        $('#typingInfo').html("");
        var yearLeftOffset = $(this).offset().left - 100
        var yearLeftOffsetTop = $(this).offset().top - 100

        CleanInfoDiv();
        $("#balls").html("")
        var clickedYear = $(this).html()
        clickedYearIndex = years.indexOf(parseInt(clickedYear))
        ElementRandomizer();
        $("#car").animate({
            "left": yearLeftOffset

        }, 2000);
        $("#popup").animate({
            "left": yearLeftOffset - 50,
            "margin-top": -"100px"
        }, 2000, function () { $("#popup").show() });
        $('#popup > .content').html("")
        $('#popup > .content').html(cars[clickedYearIndex])

    });

    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;
        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }
    function ElementRandomizer() {

        var randomElementsNumber = 1
        var randomMarginFromLeft = 1
        var randomMarginFromTop = 1
        var randomWidthHeight = 1
        for (j = 0; j < elementAccordingYears.length; j++) {
            randomElementsNumber = Math.round(Math.random() * 4 + 2)
            randomWidthHeight = Math.round(Math.random() * 10 + 30)
            for (i = 1; i <= randomElementsNumber; i++) {

                randomMarginFromLeft = Math.round(Math.random() * (containerWidth - 100) + 1)
                randomMarginFromTop = Math.round(Math.random() * 400 + 1)

                if (clickedYearIndex != -1) {
                    randomWidthHeight = 70
                }
                newElement = "<div class='animativeBalls' style = 'margin-left: " + randomMarginFromLeft + "px; margin-top: " + randomMarginFromTop + "px; width:" + randomWidthHeight + "px; height: " + randomWidthHeight + "px; border-radius: " + Math.ceil(randomWidthHeight / 2) + 30 + "px; '>" + elementAccordingYears[j].name + "</div>"

                if ($("#balls").children().length == 0) { $("#balls").append(newElement) }
                else {
                    var setOrNot = true
                    $("#balls >div").each(function () {

                        if (collision($(this), $(newElement))) {
                            setOrNot = false
                            //return
                        }

                    })
                    if (setOrNot == true) { $("#balls").append(newElement) }

                }
            }
        }
        if (clickedYearIndex != -1) {


            BallPositioning("PM", 20, 10)
            BallPositioning("SO2", 100, 10)
            BallPositioning("NO2", 180, 10)
            BallPositioning("CO", 260, 10)
            InfoTyping()
            $(".ShowFull").css("visibility", "visible");
        }

    }

    function TextDivAnimation(header, text) {
        $("#elementText").append("<h1>" + header + "</h1>")
        $("#elementText").append("<p>" + text + "</p>")
        $("#elementText").animate({
            "top": 20,
            "left": 20

        }, 1500)
            .css({ visibility: "visible" }).css('opacity', 0)
            .animate({
                opacity: 1,
                "width": containerWidth - 20,
                "height": "400px"
            }, 1500);

    }


    function CleanInfoDiv() {

        $("#elementText").animate({
            "width": 0,
            "height": 0
        }, 1500).css({ visibility: "hidden" });
        $("#elementText p,#elementText h1 ").detach()
        $("#balls").html("")
    }

    $("#balls").on('click', 'div', function () {

        if (clickedYearIndex == -1) {
            var clickedElementText = $(this).html()
            var allElementsWithThisText = $("#balls >div:contains(" + clickedElementText + ")")
            BallPositioning(clickedElementText, 120, 20);
            $("#balls >div").not(allElementsWithThisText).fadeOut("slow");
            result = elementAccordingYears.filter(function (element) {
                if (element.name == clickedElementText) {
                    return element
                } else {
                    return null
                }
            });

            TextDivAnimation(result[0].fullName, result[0].text);
        }
    });


    function BallPositioning(clickedElementText, fromTop, fromLeft) {
        var allElementsWithThisText = $("#balls >div:contains(" + clickedElementText + ")")
        $(allElementsWithThisText).each(function (index) {
            $(this).removeClass("animativeBalls");
            $(this).animate({
                "margin-top": fromTop,
                "margin-left": fromLeft

            }, 1000);
            marginTop = $(this).css("margin-top");
            marginLeft = $(this).css("margin-left")

        });

    }
    $(".closeInfo").click(function () {
        CleanInfoDiv();
        ElementRandomizer();
    });


    $(".ShowFull").click(function () {
        $('#typingInfo').hide()
        $("#balls").html("")
        clickedYearIndex = -1
        ElementRandomizer();
        $(this).css("visibility", "hidden");
        $("#popup").hide();
        $("#car").css("left", "20px");
    });

    /*typing*/






    function InfoTyping(index) {

        text = "";
        $('#typingInfo').html("");

        text = BallTextesAccordingYear[clickedYearIndex]

        $('#typingInfo').show()
        $.each(text.split(''), function (i, letter) {

            //we add 100*i ms delay to each letter 
            setTimeout(function () {

                //we add the letter to the container
                if (letter == 'N' || letter == 'C' || letter == 'S') {
                    $('#typingInfo').html($('#typingInfo').html() + "<br / >")

                }
                $('#typingInfo').html($('#typingInfo').html() + letter);

            }, 10 * i);
        });

    }


    /*car popUp*/



})


