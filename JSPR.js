let NutList = ["비타민B", "코엔자임", "비타민D", "루테인", "오메가3", "마그네슘", "비오틴", "콜라겐", "히알루론산", "칼슘", "유산균", "오메가6"]

//배열복사
let firstNutList = [];

NutList.forEach(function(item) {
    firstNutList.push(item);
});

let DosageList = [":1capsule", ":1capsule", ":1capsule", ":1capsule", ":1capsule", ":2capsule", ":1capsule", ":3capsule", ":4capsule", ":2capsule", ":1capsule", ":1capsule"];
let costList = [":15900won", ":27900won", ":48000won", ":5500won", ":33000won", ":19900won", ":8200won", ":8600won", ":7900won", ":7500won", ":23900won", ":34900won"];


//제어할 요소선택 후 변수에 담기
let displaySlot = document.querySelector(".slot_list"); //menu slot
let elem = document.querySelector(".item_print > h2"); //menu print
let DosageTxt = document.querySelector(".main_text> p > span"); //distance
let costTxt = document.querySelector("em"); //cost


//reset check
let resetNum = 1;

//LunchIs 함수선언
function NutIs() {
    //setTimeout 선언
    setTimeout(timeFunc, 900);

    function timeFunc() {
        //shuffle 메소드 선언
        function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        //슬롯애니메이션 감추기
        displaySlot.style.display = "none";

        //shuffle 메소드를 사용하여 석은 배열에서 index[0]을 가져오기
        console.log(shuffle(NutList));
        let NutPick = shuffle(NutList)[0];

        //메뉴 노출
        console.log(NutPick);
        elem.innerHTML = NutPick;

        //선택된 메뉴의 indexOf를 이용하여 distanceTxt, costTxt 노출


        let i = firstNutList.indexOf(NutPick);
        DosageTxt.innerHTML = DosageList[i];
        costTxt.innerHTML = costList[i];

        //reset 되었을 경우에 숨겨진 메뉴를 다시 노출시킴
        if (resetNum == 0) {
            elem.style.display = "block";
        }
    }
}

//reset 함수선언
function reset() {
    //메뉴 숨기기
    elem.style.display = "none";

    //슬롯애니메이션 노출
    displaySlot.style.display = "block";

    //distance, cost 초기화
    DosageTxt.innerHTML = "??capsule";
    costTxt.innerHTML = "????won";

    //resetNum으로 reset여부를 구분하기 위해 0 할당
    resetNum = 0;
}