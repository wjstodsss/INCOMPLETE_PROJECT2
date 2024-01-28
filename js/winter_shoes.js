$(document).ready(function () {
    $("#sectionBack001").after("<div id='sectionBack002'></div>")
    $("#sectionBack002").css({ width: "100%", height: "440px", backgroundColor: "#f9f9f9", borderTop: "1px solid #ccc" })
    $("#sectionBack002").append("<div id='slidewrap2'></div>")
    $("#slidewrap2").append("<ul class='shoesSlide'></ul>")
    $("#slidewrap2").append("<span class='prev'>&lt;</span>")
    $("#slidewrap2").append("<span class='next'>&gt;</span>")
    $(".prev").css({left:"0", borderRadius: "0 10px 10px 0px", padding: "0 10px"})
    $(".next").css({right:"0", borderRadius: "10px 0px 0px 10px", padding: "0 10px"})
    
    $.ajax({
        url: "./json/shoesSlideList.json",
        dataType: "json",
        success: function (data) {
            console.log(data) // 확인
            if (data.length > 0) {
                for(let i = 0; i < data.length-2; i++){ // json객체 마지막 두 객체는 메세지를 저장하여 사용 6,7
                    $(".shoesSlide").append("<li class='imgList'><a href='#a'><img src=" + data[i].src + " alt='slide image' class='shoesSlideImg'></a></li>")
                    $(".imgList").eq(i).append("<ul class='shoesSlideMessage'></ul>")
                    $(".shoesSlideMessage").eq(i).append("<li class='shoesSlideBold'>" + data[6].preTitle + "</li>")
                    $(".shoesSlideMessage").eq(i).append("<li class='shoesSlideBold'>" + data[7].title + "</li>")
                }
                $("#slidewrap2").css({width: "1120px", height: "440px", position: "relative", overflow: "hidden", margin: "0 auto"})
                $(".shoesSlide").css({width: "6720px"})
                $(".imgList").css({width: "1120px", height: "440px", float: "left", position:"relative"})
                $(".shoesSlideImg").css({width: "100%", height: "100%", position:"absolute"})
                $(".shoesSlideMessage").css({position:"absolute", top:"20%", left:"5%", fontSize: "38px", fontFamily: "fantasy", color: "#bbb"})
                $(".prev").css({position: "absolute", top: "50%", display: "block", fontSize: "38px", color: "#fff", lineHeight: "40px", background: "rgba(0,0,0,0.6)", cursor: "pointer", height: "50px", transform: "translateY(-50%)"})
                $(".next").css({position: "absolute", top: "50%", display: "block", fontSize: "38px", color: "#fff", lineHeight: "40px", background: "rgba(0,0,0,0.6)", cursor: "pointer", height: "50px", transform: "translateY(-50%)"})
            }
        }
    });

   
    // 동시에 진행되는데 자료를 받기 때문에 늦어서 인지 일부 css가 적용 안됨/ 모두 로드가 안되는 건 아니기 때문에 ajax를 마지막에 진행 되는 건 아닌것 같음
    // 해서 ajax 내부에 넣음 , two photo는 js 내부 for문 뒤의 css이므로 문제가 없었음 비슷하게 보여서 여긴 왜 먹지? 고민함
    // 증상 -  imgList이후 css가 적용 안됨 / ajax 내부로 옮긴 후 해결

    function prev(){
        $('.imgList:last').prependTo('.shoesSlide');
        $('.shoesSlide').css('margin-left',-1120);
        $('.shoesSlide').stop().animate({marginLeft:0},800);
    }

    function next(){
        $('.shoesSlide').stop().animate({marginLeft:-1120}, 
            function(){
                $('.imgList:first').appendTo('.shoesSlide');
                $('.shoesSlide').css({marginLeft:0});
            });
    }
     
    function slide(){
        $('.shoesSlide').stop().animate({marginLeft:-1120},
            function(){
                $('.imgList:first').appendTo('.shoesSlide');
                $('.shoesSlide').css({marginLeft:0});
        });
    }
     
    $('.prev').click(function(){
        prev();
    });
    $('.next').click(function(){
        next();
    });

    let winterShoesIntervalId

    function startWinterShoesInterval () {
        winterShoesIntervalId = setInterval(slide, 3000);
    }

    function stopWinterShoesInterval () {
        clearInterval(winterShoesIntervalId);
    }
    
    startWinterShoesInterval();
})