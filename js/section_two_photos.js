$(document).ready(function () {
    $("#slideBack").after("<div id='sectionBack001'></div>")
    $("#sectionBack001").css({ width: "100%", height: "440px", backgroundColor: "#111", borderTop: "1px solid #ccc" })
    $("#sectionBack001").append("<div class='topSection' id='section001' ></div>")
    $("#section001").css({width:"1120px", height:"100%", margin: "0 auto", backgroundColor:"#111"})
    $("#section001").append("<div class='photoFrame'></div>")
    $(".photoFrame").css({margin: "0 auto", width:"950px", height:"100%"})
    
    $(".photoImg").css({float: "left", width:"470px", height:"100%"})
    const data = ["img/mainPhoto/photo001.png", "img/mainPhoto/photo002.png"]
    const dataA = ["프로스펙스의 미래", "겨울 컬렉션"]
    const PHOTO_STRONG_MESSAGE = ["OUR NEXT", "WINTER COLLECTION"]
    const PHOTO_BOLD_MESSAGE = ["MOVE FORWARD, PRO-SPECTIVE DOWN", "THE TEXTUR OF WINTER"]
    for(let i = 0; i < data.length; i++){
        $(".photoFrame").append("<div class='photoSet'></div>")
        $(".photoSet").eq(i).append("<a href='#'><img class='photoImg'></a>")
        $(".photoImg").eq(i).attr("src", data[i]);
        $(".photoImg").eq(i).attr("alt", dataA[i]);
        $(".photoSet").eq(i).append("<ul class='photoMessage'></ul>")
        $(".photoMessage").eq(i).append("<li class='photoStrong'><strong>" + PHOTO_STRONG_MESSAGE[i] + "</strong></li>")
        $(".photoMessage").eq(i).append("<li class='photoBold'><b>" + PHOTO_BOLD_MESSAGE[i] + "</b></li>")
    }
    
    $(".photoSet").css({position:"relative", width:"470px", height:"100%",float:"left", overflow: "hidden"})
    $(".photoImg").css({position:"absolute", width:"100%", height:"100%", marginLeft: "1px"})
    $(".photoMessage").css({position:"absolute", top:"70%", left:"5%", fontWeight:"1200", color: "#777"})
    $(".photoStrong").css({marginBottom:"10px", fontSize: "24px"})
    $("photoBold").css({marginBottom:"10px"})

})