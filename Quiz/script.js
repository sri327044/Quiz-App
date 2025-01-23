const questions = [
    {
        question: "Who is the current president of USA?",
        answers: [
            { text: "Joe Biden", correct: false },
            { text: "Donald Trump", correct: true },
            { text: "Rishi Sunak", correct: false },
            { text: "Kamala Harris", correct: false }
        ]
    },
    {
        question: "What is the Capital of india?",
        answers: [
            { text: "New Delhi", correct: true },
            { text: "Maharastra", correct: false },
            { text: "Chennai", correct: false },
            { text: "Uttar Pradesh", correct: false }
        ]
    },
    {
        question: "What is the National Animal of India?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Leopard", correct: false },
            { text: "Elephant", correct: false },
            { text: "Tiger", correct: true }
        ]
    },
    {
        question: "Who has the Most Followers in Instagram?",
        answers: [
            { text: "Donald Trump", correct: false },
            { text: "Christiano Ronaldo", correct: true },
            { text: "Elon Musk", correct: false },
            { text: "Virat Kohli", correct: false }
        ]
    },
    {
        question: "Who is the founder of Microsoft?",
        answers: [
            { text: "Elon Musk", correct: false },
            { text: "Bill Gates", correct: true },
            { text: "Steve Jobs", correct: false },
            { text: "Mark Zukerberk", correct: false }
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

