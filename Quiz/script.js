const questions = [
    {
        question: "Who is the current president of USA?",
        answers: [
            { text: "Joe Biden", correct: false },
            { text: "Donald Trump", correct: true },
            { text: "Suryaraj", correct: false },
            { text: "Kamala Harris", correct: false }
        ]
    },
    {
        question: "Who is the Owner of SR Techpark?",
        answers: [
            { text: "Suryaraj", correct: true },
            { text: "Tamilselvan", correct: false },
            { text: "Lokesh", correct: false },
            { text: "Srisaravanan", correct: false }
        ]
    },
    {
        question: "Who is the father of our nation?",
        answers: [
            { text: "Suryaraj", correct: false },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Virat Kohli", correct: false },
            { text: "Mahatma Gandhi", correct: true }
        ]
    },
    {
        question: "Who is Kadavuley...?",
        answers: [
            { text: "Vijay eh", correct: false },
            { text: "Ajith eh", correct: true },
            { text: "Dhanush eh", correct: false },
            { text: "Simbu eh", correct: false }
        ]
    },
    {
        question: "Who is the founder of Microsoft?",
        answers: [
            { text: "Issac Newton", correct: false },
            { text: "Bill Gates", correct: true },
            { text: "Suryaraj", correct: false },
            { text: "Lord Murugan", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");

let currectQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currectQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currectQuestionIndex];
    let questionNo = currectQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}



function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${
        questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
}

function handleNextButton() {
    currectQuestionIndex++;
    if (currectQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currectQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();

