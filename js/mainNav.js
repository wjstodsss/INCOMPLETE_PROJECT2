$(document).ready(function () {

    /* header MainNav */
    $("body").append("<div class='navBack' id='navBack'></div>");
    $("#navBack").append("<header class='mainHeader' id='mainHeader'></header>");
    $(".navBack").css({
        float: "left", width: "100%", position: "absolute", zIndex: "100", top: "30px"
    });
    $("#mainHeader").css({ width: "1120px", height: "120px", margin: "0 auto" });

    for (let i = 0; i < 3; i++) {
        $("#mainHeader").append("<div class='giantNav" + i + "'></div>");
    }
    $(".giantNav0").css({ float: "left", width: "105px", height: "120px", backgroundImage: 'url("https://image.prospecs.com/front/images/renewal/logo_white.svg")' });
    $(".giantNav0").css({ backgroundSize: "cover", backgroundRepeat: "round" });
    $(".giantNav1").css({ float: "left", width: "749px", height: "120px" });
    $(".giantNav2").css({ float: "right", width: "175px", height: "120px", marginRight: "20px" });

    const mainNavWidth = ["98", "107", "133", "185", "142"];
    const mainNavTitle = ["SHOP", "EVENT", "ARCHIVE", "SPONSORSHIP", "ONE SPEC"];
    for (let i = 0; i < 5; i++) {
        console.log(mainNavTitle[i])
        $().append();
        $(".giantNav1").append("<div class='mainNav textColorChager' id='mainNav" + i + "'><a href='#'></a></div>");
        $(".mainNav:eq(" + i + ")>a").css("width", mainNavWidth[i]).text(mainNavTitle[i]);
        $(".giantNav1>.mainNav>a").css({ textDecoration: "none", height: "71", marginTop: "51px", color: "#fff", fontWeight: "800", fontFamily: "Poppins, sans-serif" })
    }

    $(".mainNav").css({ float: "left", height: "120px", display: "flex", textAlign: "center" });

    const subNavWidth = ["25", "25", "100"];
    for (let i = 0; i < 3; i++) {
        $(".giantNav2").append("<div class='subNav'></div>");
        $(".subNav:eq(" + i + ")").css({ width: subNavWidth[i] });
    }

    $(".subNav").css({ float: "left", height: "120px" });
    $(".subNav:eq(0)").append("<div id='searchButton'></div>").css({ height: "25px", backgroundSize: "cover", backgroundRepeat: "round", backgroundImage: 'url("https://image.prospecs.com/front/images/renewal/icon_search_white.svg")', marginTop: "47.5px" });
    $(".subNav:eq(1)").append("<div id='cartButton'></div>").css({ height: "25px", backgroundSize: "cover", backgroundRepeat: "round", backgroundImage: 'url("https://image.prospecs.com/front/images/renewal/icon_cart_white.svg")', marginTop: "47.5px", marginLeft: "25px" });
    $(".subNav:eq(2)").text("LOGIN").css({ height: "120px", fontWeight: "800", fontFamily: "Poppins, sans-serif", color: "white", lineHeight: "120px", textAlign: "right" });


    $("#navBack").hover(
        function () {
            $(this).css({ backgroundColor: "white" });
            $(".giantNav1>.mainNav>a").css({ color: "#000" });
            $(".giantNav0").css({ filter: "invert(1)" });
            $(".giantNav2").css({ filter: "invert(1)" });
            $(".subGiantNav").stop().slideDown();
        },
        function () {
            $(".subGiantNav").stop().slideUp(function () {
                $("#navBack").css({ backgroundColor: "transparent" });
                $(".giantNav1>.mainNav>a").css({ color: "#fff" });
                $(".giantNav0").css({ filter: "invert(0)" });
                $(".giantNav2").css({ filter: "invert(0)" })
            })


        }
    )




    $("#navBack").append("<nav class='subGiantNav'></nav>");
    $(".subGiantNav").append("<ul class='menu'></ul>");
    $(".subGiantNav").css({ width: "1120px", margin: "0 auto", display: "none" })
    const SUB_TITLE = ["SHOES", "MEN", "WOMEN", "BAG/ACC", "KIDS", "SALE", "BEST50", "GIFT CARD"]

    for (let i = 0; i < 8; i++) {
        $(".menu").append("<li class='subTitle textColorChager'><a href='#'>" + SUB_TITLE[i] + "</a></li>");
        $(".subTitle:eq(" + i + ")").append("<ul class='sub'></ul>");
        $(".subTitle:eq(" + i + ") li a").css({ color: "black" });
    }

    $(".menu").css({ float: "left", width: "1120px", backgroundColor: "white" })
    $(".menu>li").css({ float: "left", width: "12%", textAlign: "center", lineHeight: "30px", backgroundColor: "white" })
    $(".menu>li>a").css({ fontSize: "13px", fontWeight: "bold", scolor: "#000", backgroundColor: "white" })

    $(".sub").css({ backgroundColor: "red" })



    const DROP_SHOP_SHOES_SUB = ["러닝화", "워킹화", "스포츠화", "트레킹화", "스니커즈", "샌들/슬리퍼", "기타"]
    const DROP_SHOP_MEN_SUB = ["티셔츠", "스웻셔츠&후디", "아우터", "팬츠&타이즈", "숏팬츠", "트레이닝 상/하", "기타"]
    const DROP_SHOP_WOMEN_SUB = ["티셔츠", "스웻셔츠&후디", "아우터", "스포츠 브라", "팬츠&레깅스", "숏팬츠&스커트", "트레이닝 상/하", "기타"]
    const DROP_SHOP_BAG_ACC_SUB = ["가방", "모자 & 헤드밴드", "양말", "장갑 & 암가드", "홈트레이닝", "라켓스포츠", "기타"]
    const DROP_SHOP_KIDS_SUB = ["신발", "의류", "용품"]
    const DROP_SHOP_SALE_SUB = ["신발", "남성의류", "여성의류", "용품"]
    const DROP_SHOP_ALL_TITLE = [DROP_SHOP_SHOES_SUB, DROP_SHOP_MEN_SUB, DROP_SHOP_WOMEN_SUB, DROP_SHOP_BAG_ACC_SUB, DROP_SHOP_KIDS_SUB, DROP_SHOP_SALE_SUB]

    for (let j = 0; j < DROP_SHOP_ALL_TITLE.length; j++) {
        let subMenu = $(".subTitle:eq(" + j + ")")
        for (let i = 0; i < DROP_SHOP_ALL_TITLE[j].length; i++) {
            subMenu.append("<li><a href='#' class='textColorChager'>" + DROP_SHOP_ALL_TITLE[j][i] + "</a></li>");
        }
    }

    $(".subTitle>li>a").css({ fontSize: "12px", fontWeight: "bold" });

    $(".menu").append("<div class='shopSub'></div>")
    $(".shopSub").css({ float: "right", width: "220px", height: "240px", marginRight: "50px" })
    $(".shopSub").append("<img class='shopSubImg' src='img/etc/shop001.png' alt='세일'>")
    $(".shopSub").append("<img class='shopSubImg' src='img/etc/shop002.png' alt='브랜드북'>")
    $(".shopSubImg").css({ width: "100%", height: "115px", marginBottom: "5px" })

    $(".textColorChager").hover(
        function () {
            $(this).css({color:"magenta"})
        },
        
        function () {
            $(this).css({color:""})
        }
    )




});