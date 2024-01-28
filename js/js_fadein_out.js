$(document).ready(function () {
    $("body").append("<div class='sliderBack' id='slideBack'></div>");
    $("#slideBack").append("<div class='slidewrap' id='slidewrap'></div>");
    $(".sliderBack").css({ float: "left", width: "100%", display: "flex", justifyContent: "center" });
    $(".slidewrap").css({ width: "1240px", height: "420px", margin: "0 auto", marginTop: "-120px", margin: "0 auto", position: "relative" });
    $(".slidewrap").append("<ul class='slide'></ul>");

    $(".slide").css({ width: "100%" })
    $(".slide li").css({ width: "100%", height: "100%", position: "absolute", top: "0", left: "0" })
    $(".slide li img").css({ width: "100%", height: "100%" })
    $(".slide li").not("first-child").css({ display: "none" })

    const SLIDE_IMAGE = ["img/slide/slide004.png", "img/slide/slide002.png", "img/slide/slide003.png"]
    const ALT_IMAGE = ["북", "국가대표", "원스텝"]
    const ID_IMAGE = ["books", "teamKorea", "oneStep"]

    for (let i = 0; i < SLIDE_IMAGE.length; i++) {
        $(".slide").append('<li><img src="' + SLIDE_IMAGE[i] + '" alt="' + ALT_IMAGE[i] + '" id="' + ID_IMAGE[i] + '"></li>')
    }

    $(".slide img").css({ position: "absolute" })

    function fadeInManager() {

        let opacityValueFadeIn = 0;
        function FadeInUnit(image) {
            this.image = image;
            this.fadeIn = function () {
                document.getElementById(image).style.opacity = opacityValueFadeIn;
                opacityValueFadeIn += 0.1;
                if (opacityValueFadeIn >= 1.5) {
                    clearInterval(myFadeIn);
                    opacityValueFadeIn = 0;
                }
            }
            let myFadeIn = setInterval(this.fadeIn, 100);
        }

        let imageIdIndexFadeIn = 0;
        function repeatFadeIn() {
            const imageId = ["teamKorea", "oneStep"];
            if (imageIdIndexFadeIn == imageId.length) {
                stopFadeInInterval();
                return
            }
            let createFadeIn = new FadeInUnit(imageId[imageIdIndexFadeIn]);
            imageIdIndexFadeIn++;
        }

        let fadeInInterval = setInterval(repeatFadeIn, 2500);

        function stopFadeInInterval() {
            clearInterval(fadeInInterval);
        }
    }


    function fadeOutManager() {

        let opacityValueFadeOut = 1;
        function FadeOutUnit(image) {
            this.image = image;
            this.fadeOut = function () {
                document.getElementById(image).style.opacity = opacityValueFadeOut;
                opacityValueFadeOut -= 0.1;
                if (opacityValueFadeOut <= -0.7) {
                    clearInterval(myFadeOut);
                    opacityValueFadeOut = 1;
                }
            }
            let myFadeOut = setInterval(this.fadeOut, 100);
        }

        let imageIdIndexFadeOut = 1;
        function repeatFadeOut() {
            const imageId = ["teamKorea", "oneStep"];
            if (imageIdIndexFadeOut < 0) {
                stopFadeOutInterval();
                return
            }
            let createFadeOut = new FadeOutUnit(imageId[imageIdIndexFadeOut]);
            imageIdIndexFadeOut--;
        }

        let fadeOutInterval = setInterval(repeatFadeOut, 2500);

        function stopFadeOutInterval() {
            clearInterval(fadeOutInterval);
        }
    }

    let sliderTimer;

    function repeat() {
        setTimeout(fadeOutManager, 0);
        setTimeout(fadeInManager, 6000);
    }

    function sliderStart() {
        setTimeout(repeat, 0);
        sliderTimer = setInterval(repeat, 12000);
    }

    function sliderStop() {
        clearInterval(sliderTimer);
    }

    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") {
            return sliderStop();
        }
        return sliderStart();
    });
    sliderStart();
})

