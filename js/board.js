$(document).ready(function () {

    const EVENT_ALERT001 = "프로스펙스 X 한국타이어 콜라보레이션 골프화 출시";
    const EVENT_ALERT002 = "1월 출석체크 시 출석 포인트 +  경품 증정";
    const EVENT_ALERT003 = "방한대전 UP TO 30% OFF (겨울의류, 방한신발 및 용품)";
    const EVENT_ALERT004 = "국민/신한/현대카드 결제 시 최대 1만원 즉시할인 (소진 시 종료)";
    const EVENT_ALERT005 = "New Year Sale ~70% + 첫구매 20% + 포인트 2배 + 룰렛이벤트";
    const EVENT_ALERT006 = "1월 신규가입 고객 대상 구매 이벤트";

    $("body").append("<div class='boardBack' id='boardSliderBack'></div>")
    $("#boardSliderBack").append("<div id='boardSlider'></div>")
    $(".boardBack").css({ float: "left", width: "100%", height: "30px", justifyContent: "center", display: "flex", backgroundColor: "#000" })
    $("#boardSlider").css({ width: "1120px", height: "100%", textAlign: "center", lineHeight: "25px", fontWeight: "bold", color: "white", fontSize: "12px", padding: "2px" })


    const NEWS = [EVENT_ALERT001, EVENT_ALERT002, EVENT_ALERT003, EVENT_ALERT004, EVENT_ALERT005, EVENT_ALERT006]

    let boardSetInterval = 0;
    let boardIndex = 0;

    function newsBoard() {
        $("#boardSlider").text(NEWS[boardIndex]);
        boardIndex++;
        if (boardIndex >= NEWS.length) boardIndex = 0;
    }

    function startInterval() {
        boardSetInterval = setInterval(newsBoard, 2000);
    }

    function stopBoardInterval() {
        clearInterval(boardSetInterval);
    }

    $("#boardSlider").text(NEWS[boardIndex]);
    startInterval();

})