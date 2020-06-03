const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const shuffledQuestions, CurrentQuestionsIndex;
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');



startButton.addEventListener('click', startGame);

function startGame() {
    Console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questionContainerElement.shadowRoot(() => Math.random() - .5);
    CurrentQuestionsIndex = 0;
    questionContainerElement.remove('hide');
    setNextQuestion
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[CurrentQuestionsIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
}

function selectAnswer() {

}

const question = [
    {
        question: "who was the first president of the USA?",
        answer: [
        { text: "George Washington", correct: true},
        { text: "Will Smith", correct:false}, 
        ]

    }
]