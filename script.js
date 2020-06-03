const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const shuffledQuestions, CurrentQuestionsIndex;
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    CurrentQuestionsIndex++
    setNextQuestion()
})

function startGame() {
    Console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questionContainerElement.shadowRoot(() => Math.random() - .5)
    CurrentQuestionsIndex = 0
    questionContainerElement.remove('hide')
    setNextQuestion
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[CurrentQuestionsIndex])
    question.answer.forEach(answer => {
        const button  = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    }
    )
}

function resetState() {
    clearStatusClass(document.body)
    setNextQuestion.button.classList.add('hide')
    while (answerButtonElement.first) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
}

function selectAnswer() { 
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button.button.dataset.correct)
    })
    if(shuffledQuestions.length > CurrentQuestionsIndex + 1) {
        nextButton.classList.remove('hide')
    }else {
        startButton.innerText = 'restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element {
    element.classList.add('correct')
    element.classList.add('wrong')
})

const question = [
    {
        question: "who was the first president of the USA?",
        answer: [
        { text: "George Washington", correct: true},
        { text: "Will Smith", correct:false}, 
        { text: "George Bush", correct:false}, 
        { text: "Will Graham", correct:false},
        ]

    }
]

const question = [
    {
        question: "What year was amazon founded?", 
        answer: [
            {text: "1994", correct: true}, 
            {text: "1998", correct: false}, 
            {text: "1949", correct: false},
            {text: "1995", correct: false},
        ]
    }
]

const question = [
    {
        question: "Whats days does class start?", 
        answer: [
            {text: "Tuesday, Thursday and Saturday", correct: true}, 
            {text: "Tuesday, Thursday and Sunday", correct: false}, 
            {text: "Monday, Wednesday and Saturday", correct: false},
            {text: "Only Wednesday", correct: false},
        ]
    }
]

const question = [
    {
        question: "Which is not a fruit?", 
        answer: [
            {text: "Carrots", correct: true}, 
            {text: "Strawberries", correct: false}, 
            {text: "Blueberries", correct: false},
            {text: "Raspberries", correct: false},
        ]
    }
]