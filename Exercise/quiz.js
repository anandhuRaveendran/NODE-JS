const questions = [
    { question: "What is the Fullform of AI?", answers: ["Artificial Indution", "Automatic Information", "Auto Internet", "Artificial Intelligence"], correct: "Artificial Intelligence" },
    { question: "Capital of Kerala", answers: ["Kollam", "Ernakulam", "Idukki", "Trivandrum"], correct: "Trivandrum" },
    { question: "Who is the current Prime Misinter of India?", answers: ["Nehru", "Modi", "Manmohan SIngh", "Adani"], correct: "Modi" },
    { question: "Which is the most widely spoken language in the world?", answers: ["Hindi", "Chinease", "English", "Mandarin"], correct: "Mandarin" }
];


let currentQuestionIndex = 0;
let score = 0;
let timer;

const questionElement = document.getElementById('question');
const answerFormElement = document.getElementById('answer-form');
const nextButton = document.getElementById('next-button');
const previousButton =document.getElementById('pre-button')
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.innerText = '';
    nextButton.innerText = 'Next';
    previousButton.innerText='Previous';
    showQuestion();
}

function showQuestion() {
    clearInterval(timer);
    timerElement.innerText = '';
    answerFormElement.innerHTML = '';

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const radioWrapper = document.createElement('div');
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.id = `answer${index}`;
        radioButton.name = 'answer';
        radioButton.value = answer;
        const label = document.createElement('label');
        label.htmlFor = `answer${index}`;
        label.innerText = answer;
        radioWrapper.appendChild(radioButton);
        radioWrapper.appendChild(label);
        answerFormElement.appendChild(radioWrapper);
    });
    startTimer();
}
function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer && selectedAnswer.value === questions[currentQuestionIndex].correct) {
        score++;
    }
}
function showScore() {
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerText = 'Restart';
}

function handleNextButton() {
    checkAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
       
        showScore();
    }
}
function handlePreviousButton() {
    checkAnswer();
    currentQuestionIndex--;
    if (currentQuestionIndex  >=0) {
        showQuestion();
    } else {
       
        showScore();
    }
}

function startTimer() {
    let timeLeft = 10;
    timerElement.innerText = `Time left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleNextButton(); 
        }
    }, 1000);
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
previousButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handlePreviousButton();
    } else {
        startQuiz();
    }
});

// showQuestion();
startQuiz();