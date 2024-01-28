$(document).ready(function () {
    $("body").append("<div class='sliderBack' id='slideBack'></div>");
    $("#slideBack").append("<div class='slidewrap' id='slidewrap'></div>");
    $(".sliderBack").css({ width: "100%", display: "flex", justifyContent: "center", backgroundColor: "black", top: "30px" });
    $(".slidewrap").css({ width: "1180px", height: "520px", margin: "0 auto", marginTop: "30px", position: "relative" });
    $(".slidewrap").append("<ul class='slide'></ul>");

    $(".slide").css({ width: "100%" })

    const SLIDE_IMAGE = ["img/slide/slide004.png", "img/slide/slide002.png", "img/slide/slide003.png"]
    const ALT_IMAGE = ["북", "국가대표", "원스텝"]
    const ID_IMAGE = ["books", "teamKorea", "oneStep"]

    for (let i = 0; i < SLIDE_IMAGE.length; i++) {
        $(".slide").append('<li><a href="#"><img src="' + SLIDE_IMAGE[i] + '" alt="' + ALT_IMAGE[i] + '" id="' + ID_IMAGE[i] + '"></a></li>')
    }

    $(".slide li").css({ width: "100%", height: "100%", top: "0", left: "0", position: "absolute" })
    $(".slide li a img").css({ width: "100%", height: "100%" })
    $(".slide li").not("first-child").css({ display: "none" })
    var i = 0;

    function slide() {

        if (i > $(".slide li:last").index()) {
            i = 0;
        }
        $(".slide li").eq(i).stop().fadeIn('slow');
        $(".slide li").eq(i - 1).stop().fadeOut();
        i++;
    }

    let mainSliderId

    function startMainSlider () {
        setTimeout(slide, 0);
        mainSliderId = setInterval(slide, 3000);
    }

    function stopMainSlider () {
        clearInterval(mainSliderId);
    }
    
    startMainSlider();

})

