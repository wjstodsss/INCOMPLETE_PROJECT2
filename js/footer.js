$(document).ready(function () {
    $("#sectionBack003").after('<footer id="footer"></footer>')

    $("#footer").append('<div id="footerBottom"></div>')
    $("#footerBottom").append('<div id="footerLeft"></div>')
    $("#footerLeft").append('<img src="https://image.prospecs.com/front/images/renewal/logo_white.svg" alt="프로스펙스 로고">')
    $("#footerLeft").append("<ul id='middle1'></ul>")

    const FOOTER_CORP_INFO = ["(주)LS네트웍스", "대표이사 : 문성준 | 사업자등록번호 : 622-81-04805", "통신판매업 신고번호 : 2016-경남김해-0229", "경상남도 김해시 호계로 428, 1층(부원동) 사업자정보확인", "개인정보관리 책임자 : 예재승", "마케팅/제휴 문의 : prospecs.brand@gmail.com"]
    for (let i = 0; i < FOOTER_CORP_INFO.length; i++) {
        $("#middle1").append("<li>" + FOOTER_CORP_INFO[i] + "</li>")
    }

    $("#footerLeft").append("<p id='top'><a href='#'>프로스펙스닷컴 | COPYRIGHT© LS NETWORKS CO. ALL RIGHTS RESERVED</a></p>")
    $("#footerBottom").append('<div id="footerCenter"></div>')
    $("#footerCenter").append("<ul></ul>")

    const FOOTER_ETC_INFO = ["개인정보처리방침", "이용약관", "고객센터", "A/S 안내", "공지사항", "앱다운로드"]
    for (let i = 0; i < FOOTER_ETC_INFO.length; i++) {
        $("#footerCenter>ul").append("<li>" + FOOTER_ETC_INFO[i] + "</li>")
    }

    $("#footerBottom").append('<div id="footerRight"></div>')
    $("#footerRight").append('<div id="snsIcons">')

    const FOOTER_ICON_URL = ["https://image.prospecs.com/front/images/renewal/icon_facebook.svg", "https://image.prospecs.com/front/images/renewal/icon_youtube.svg", "https://image.prospecs.com/front/images/renewal/icon_insta.svg"]
    const FOOTER_ICON_ALT = ["페이스북", "유튜브", "인스타그램"]

    for (let i = 0; i < FOOTER_ICON_URL.length; i++) {
        $("#snsIcons").append('<img src="' + FOOTER_ICON_URL[i] + '" alt="' + FOOTER_ICON_ALT[i] + '" class="iconSet">')
    }

    $("#footerRight").append('<div id="contactUs">').append('<ul></ul>')

    $("#contactUs").append("<li><span id='letter'></span></li>")
    $("#letter").text("CONTACT US")
    $("<li><br>구매 / 배송 문의</li>").appendTo("#contactUs>li")
    $("<li><span>080-710-1020</span></li>").appendTo("#contactUs>li")
    $("<li><br>MON - FRI 09 : 00 - 18:00</li>").appendTo("#contactUs>li")
    $("<li>주말, 공휴일 휴무</li>").appendTo("#contactUs>li")
    $("<li>BREAK TIME : 12:30 - 13:00</li>").appendTo("#contactUs>li")

    $("footer").css({ position: "absolute", width: "100%", height: "500px", paddingTop: "30px", margin: "0 auto", borderTop: "1px solid #ccc", backgroundColor: "#222", display: "flex", justifyContent: "center" })
    $("#footerBottom").css({ float: "left", width: "980px", height: "240px", borderTop: "3px solid #ccc", marginTop: "10px", backgroundColor: "#222", marginLeft: "auto", marginRight: "auto" })
    $("#footerLeft").css({ float: "left", width: "550px", height: "100%" })
    $("#top").css({ float: "left", width: "650px", height: "50px", lineHeight: "55px", fontSize: "14px", fontWeight: "bold" })
    $("#top > a").css({ margin: "0 8px 0 0", color: "white" })
    $("#middle1").css({ float: "left", width: "380px", height: "120px", color: "#fff", fontSize: "13px", marginTop: "70px", marginLeft: "-80px", fontWeight: "bold" })
    $("#footerLeft > img").css({ float: "left", width: "80px", height: "53px" })
    $("#footerCenter").css({ float: "left", width: "180px", height: "240px", marginTop: "50px", color: "#fff", fontSize: "13px" })
    $("#footerRight").css({ float: "left", width: "250px", height: "100%", color: "#666" })
    $("#snsIcons").css({ float: "left", width: "100%", height: "24px", marginTop: "10px", marginRight: "10px", marginBottom: "10px" })
    $("#snsIcons > img").css({ marginRight: "14px" })
    $("#contactUs > p").css({ fontSize: "12px", padding: "5px" })
    $("#letter").css({ color: "#fff", fontSize: "24px", fontWeight: "bold" })
    $("#contactUs > p > span").css({ color: "#fff", fontWeight: "bold" })

})

