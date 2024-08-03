let gameSeq = [];
let userSeq = [];

let level = 0;
let hiScore = 0;
let started = false;

let h2 = document.querySelector("h2");
let body = document.querySelector("body");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        console.log("game started");

        levelup();
    }
});

function levelup() {
    level++;
    h2.innerText = `Level ${level}`;
    userSeq = [];

    let btnNumber = Math.ceil(Math.random() * 4);
    let randomBtn = document.querySelector(`.btn-${btnNumber}`);
    gameSeq.push(randomBtn.classList[1]);
    flash(randomBtn);

}

function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function btnPress() {
    console.log("button pressed");
    flash(this);

    userSeq.push(this.classList[1]);
    console.log("GAME :" + gameSeq);
    console.log("USER :" + userSeq);

    check(userSeq.length - 1);
}

let btns = document.querySelectorAll(".btn");
for (btn of btns) {
    btn.addEventListener("click", btnPress)
}

function check(idx) {
    if (gameSeq[idx] == userSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 500);
        }
    } else {
        if (level > hiScore) {
            hiScore = level;
        }

        h2.innerHTML = `Game over ! <br>SCORE : ${level}          HIGH SCORE : ${hiScore}<br>Press any key`;

        body.classList.add("over");
        setTimeout(function () {
            body.classList.remove("over");
        }, 100);
        reset();
    }
}

function reset() {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}