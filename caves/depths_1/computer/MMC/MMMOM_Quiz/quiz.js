//button hide
function hide(num) {
    let div = document.getElementsByClassName("button")
    div[num].classList.add("hide")
}

var score = 0;

var pressed = 0;

const answers = 
['Y',//Q1 Are you a pervert?
'Y',//Q2 Are you guilty of any major crimes in this lifetime?
'Y',//Q3 Have you ever embezzled money?
'Y',//Q4 Have you ever been a drug addict?
'Y',//Q5 Have you ever bombed anything?
'Y',//Q6 Have you ever murdered anyone?
'Y',//Q7 Do you collect sexual objects?
'N',//Q8 Do you have a secret you are afraid I'll find out?
'N',//Q9 Do you think there is anything wrong with having your privacy invaded?
'N',//Q10 Did you come to Earth for evil purposes?
'Y',//Q11 Have you ever smothered a baby?
'Y',//Q12 Have you ever enslaved a population?
'Y',//Q13 Have you ever destroyed a culture?
'Y',//Q14 Have you ever torn out someone's tongue?
'Y',//Q15 Have you ever zapped anyone?
'N',//Q16 Have you ever eaten a human body?
'N'];//Q17 Have you ever made a planet, or nation, radioactive?

function DEQ(){
    if (localStorage.getItem("DEQ") != 2) {
        localStorage.setItem("DEQ", 1) 
    }
    console.log(localStorage.getItem("DEQ"))
    
}

function answer(q, a) {
    q = q-1     
    if (answers[q] !== null){
        pressed ++
    }
    if (a === answers[q]){
        score ++
    } 
    answers[q] = null;
    console.log("score is",score)

    if (pressed == 17){
        localStorage.setItem("qScore", score);
        if ((score >= 0) && (score <= 4)) {
            window.location.href = "results/failiure.html";
        } else if ((score => 5) && (score <= 10)) {
            window.location.href = "results/keep_trying.html"
        } else if ((score > 10 && score <= 14)) {
            window.location.href = "results/success.html"
        } else if ((score > 14 && score <= 17)) {
            window.location.href = "results/prodigy.html"
        } 
    }
}

function getScore() {
    console.log(localStorage.getItem("qScore"))

}

