const quizContainer = document.querySelector(".quiz-container");
const submit = document.querySelector("#submit");
const quizTriangle = document.querySelector("#quiz-triangle");

const correctAnswer = ["90°", "right","acute","obtuse"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizContainer);
    for (let value of formResult.values()) {

        if (value === correctAnswer[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    quizTriangle.innerText = "yay! your score is " + score;
}



submit.addEventListener("click", calculateScore)