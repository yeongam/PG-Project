const cardArray = [{
        name: "Product1",
        img: "./Product1.png",
        id: null,
        done: false
    },
    {
        name: "Product1",
        img: "./Product1.png",
        id: null,
        done: false
    },
    {
        name: "Product2",
        img: "./Product2.png",
        id: null,
        done: false
    },
    {
        name: "Product2",
        img: "./Product2.png",
        id: null,
        done: false
    },
    {
        name: "Product3",
        img: "./Product3.png",
        id: null,
        done: false
    },
    {
        name: "Product3",
        img: "./Product3.png",
        id: null,
        done: false
    },
    {
        name: "Product5",
        img: "./Product5.png",
        id: null,
        done: false
    },
    {
        name: "Product5",
        img: "./Product5.png",
        id: null,
        done: false
    },
    {
        name: "Product6",
        img: "./Product6.png",
        id: null,
        done: false
    },
    {
        name: "Product6",
        img: "./Product6.png",
        id: null,
        done: false
    },
    {
        name: "Product7",
        img: "./Product7.png",
        id: null,
        done: false
    },
    {
        name: "Product7",
        img: "./Product7.png",
        id: null,
        done: false
    }
];


const gameDOM = [];
let Save_One = -1;
let Save_Two = -1;
let clickCount = 0;

const getGameDOM = () => {
    const rows = document.querySelectorAll(".container_1 .row");
    for (let i = 0; i < rows.length; i++) {
        gameDOM[i] = rows[i].querySelectorAll(".column");
    }
    console.log(gameDOM);
};

const setIDtoCardArray = () => {
    cardArray[0].id = "0-0";
    cardArray[1].id = "0-1";
    cardArray[2].id = "0-2";
    cardArray[3].id = "0-3";
    cardArray[4].id = "1-0";
    cardArray[5].id = "1-1";
    cardArray[6].id = "1-2";
    cardArray[7].id = "1-3";
    cardArray[8].id = "2-0";
    cardArray[9].id = "2-1";
    cardArray[10].id = "2-2";
    cardArray[11].id = "2-3";
};

const createBoard = () => {
    for (let i = 0; i < gameDOM.length; i++) {
        for (let j = 0; j < gameDOM[i].length; j++) {
            const card = document.createElement("img");
            card.setAttribute("src", "./Mystery.png");
            card.classList.add("eachImage");
            gameDOM[i][j].appendChild(card);
        };
    };
    console.log(gameDOM);
};

const setClickHistory = (location) => {
    if (Save_One === -1) {
        Save_One = location;
    } else {
        Save_Two = location;
    }
};

const backFilp = () => {
    const parsedIdFirst = cardArray[Save_One].id.split("-");
    const parsedIdSecond = cardArray[Save_Two].id.split("-");

    setTimeout(() => {
        gameDOM[parsedIdFirst[0]][parsedIdFirst[1]].querySelector("img").src =
            "./Mystery.png";
        gameDOM[parsedIdSecond[0]][parsedIdSecond[1]].querySelector("img").src =
            "./Mystery.png";
    }, 500);

};

const isCorrect = () => {
    if (cardArray[Save_One].name === cardArray[Save_Two].name) {
        cardArray[Save_One].done = true;
        cardArray[Save_Two].done = true;
    } else {
        backFilp();

    }
};

const flip = (location) => {
    if (!cardArray[location].done) {
        setClickHistory(location);
        const parseId = cardArray[location].id.split("-");
        gameDOM[parseId[0]][parseId[1]].querySelector("img").src =
            cardArray[location].img;
        clickCount++;
        if (clickCount == 2) {
            clickCount = 0;
            isCorrect();
        }

        if (Save_One !== -1 && Save_Two !== -1) {
            Save_One = -1;
            Save_Two = -1;
        }
    }
};

//제어할 요소선택 후 변수에 담기
let displayCard = document.querySelector(".container_1"); //카드 게임란
let gamecount = 0;

window.onload = function() {
    //container_1 감추기
    displayCard.style.display = "none";

};

function gameStart() {
    if (gamecount == 0) {
        displayCard.style.display = "block"; //카드 게임란 노출
        getGameDOM();
        cardArray.sort(() => 0.5 - Math.random());
        setIDtoCardArray();
        console.log(cardArray);
        createBoard();
        gamecount = 1;
    } else {
        alert('새로 시작하려면 Reset 버튼을 눌러주세요 ❗');
    }
};

function gameReset() {
    location.reload(); //새로고침
};