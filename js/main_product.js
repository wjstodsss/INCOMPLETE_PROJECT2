$(document).ready(function () {
    $("#sectionBack002").after("<div id='sectionBack003'></div>")
    $("#sectionBack003").css({ width: "100%", height: "540px", backgroundColor: "#fff", borderTop: "1px solid #eee" })
    $("#sectionBack003").append("<div id='slidewrap3'></div>")//가운데 놓기
    $("#slidewrap3").append("<nav><ul class='wearSlide'></ul></nav>")//보여주기 프레임
    
    const WEAR_NAV_TITLE = ["헤비다운", "롱패딩자켓", "겨울트레이닝", "방한 아이템", "러닝 다운", "다운 베스트"];

    for (let i = 0; i < WEAR_NAV_TITLE.length; i++) {
        $(".wearSlide").append('<li class="wearTitle">' + WEAR_NAV_TITLE[i] + '</li>')
    }// 메뉴 네비
    
    $("#slidewrap3").css({width: "1120px", position: "relative", margin: "0 auto", alignItems: "center"})
    $(".wearSlide").css({textAlign: "center", width:"740px", display:"flex", justifyContent:"center", backgroundColor:"white", padding: "5px", margin: "30px auto 0" })
    $(".wearTitle").css({fontSize: "1em", fontFamily: "fantasy", fontWeight: "bold", color: "#666", margin:"0 20px", cursor: "pointer"})

    $("#slidewrap3").append("<div class='wearSlidewrap'></div>")// 제품 보여주기 프레임
    $(".wearSlidewrap").css({width: "1080px", height: "420px", position: "relative", overflow: "hidden", margin: "0 auto", backgroundColor:"green", top: "20px"})
    $(".wearSlidewrap").append("<span class='prev2'>&lt;</span>")
    $(".wearSlidewrap").append("<span class='next2'>&gt;</span>")
    $(".wearSlidewrap").append("<div class='wearSetSet'></div>") // 이미지 세트 세트
    $(".wearSetSet").css({width: "3600px", height: "420px", backgroundColor:"#fff", textAlign: "center"})

    
    const IMAGE_SET_COUNT = 8
    for (let i = 0; i < IMAGE_SET_COUNT; i++) {
        $(".wearSetSet").append("<a href='#a'><div class='wearSet'></div></a>");
    }
    
    $(".wearSet").css({float:"left", width: "340px", height: "420px", margin: "0 10px", backgroundColor:"white", padding: "5px 0"})
    
    $(".prev2").css({zIndex:"10", height: "100%", display: "flex", alignItems:"center", backgroundColor:"#ddd", position: "absolute", left:"0", padding: "0 10px", cursor: "pointer" })
    $(".next2").css({zIndex:"10", height: "100%", display: "flex", alignItems:"center", backgroundColor:"#ddd", position: "absolute", right:"0", padding: "0 10px", cursor: "pointer"})


    $.ajax({
        url: "./json/heavy.json",
        dataType: "json",
        success: function (data) {
            console.log(data)
            if (data.length > 0) {
                for(let i = 0; i < data.length; i++){
                    $(".wearSetSet>a>.wearSet").eq(i).append("<img src=" + data[i].src + " alt='product image' class='wearSetImg'>")
                    $(".wearSetSet>a>.wearSet").eq(i).append("<p class='wearPreTitle'>" + data[i].preTitle + "</p>")
                    $(".wearSetSet>a>.wearSet").eq(i).append("<p class='wearSetTitle'>" + data[i].title + "</p>")
                    $(".wearSetSet>a>.wearSet").eq(i).append("<p class='wearPrice'>" + data[i].price + "</p>")
                }
                $(".wearPreTitle").css({fontSize:"12px"})
                $(".wearSetTitle").css({fontSize:"13px", color:"magenta"})
                $(".wearPrice").css({fontSize:"13px", fontWeight:"bold"})
            }
        }
    });


    


    const WEAR_INFO_URL = ["./json/heavy.json", "./json/long.json", "./json/training.json", "./json/keep.json", "./json/running.json", "./json/vest.json"]
    $(".wearTitle").click(function () {
        $(".wearSet").empty();
        $.ajax({
            url: WEAR_INFO_URL[$(".wearTitle").index(this)],
            dataType: "json",
            success: function (data) {
                console.log(data)
                if (data.length > 0) {
                    for(let i = 0; i < data.length; i++){
                        $(".wearSetSet>a>.wearSet").eq(i).append("<img src=" + data[i].src + " alt='product image' class='wearSetImg'>")
                        $(".wearSetSet>a>.wearSet").eq(i).append("<p class='wearPreTitle'>" + data[i].preTitle + "</p>")
                        $(".wearSetSet>a>.wearSet").eq(i).append("<p class='wearSetTitle'>" + data[i].title + "</p>")
                        $(".wearSetSet>a>.wearSet").eq(i).append("<p class='wearPrice'>" + data[i].price + "</p>")
                        
                    }
                    $(".wearPreTitle").css({fontSize:"12px"})
                    $(".wearSetTitle").css({fontSize:"13px", color:"magenta"})
                    $(".wearPrice").css({fontSize:"13px", fontWeight:"bold"})
                  
                }
            }
        });
    })

    
        
    const SHOW_COUNT = 3;
    function prev2(){
        for (let i = 0; i < SHOW_COUNT; i++) {
            $('.wearSet:last').prependTo('.wearSetSet');
        }
        $('.wearSetSet').css('margin-left',-1080);
        $('.wearSetSet').stop().animate({marginLeft:0},800);
    }

    function next2(){
        $('.wearSetSet').stop().animate({marginLeft:-1080}, 
            function(){
                for (let i = 0; i < SHOW_COUNT; i++) {
                    $('.wearSet:first').appendTo('.wearSetSet');
                }
                $('.wearSetSet').css({marginLeft:0});
            });
    }

    $('.prev2').click(function(){
        prev2();
    });
    $('.next2').click(function(){
        next2();
    });
})