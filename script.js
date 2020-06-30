const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
const MILLISECONDS_IN_HOUR = 1000 * 60 * 60;
const MILLISECONDS_IN_MINUTE = 1000 * 60;

let score = 0;
let selectedAnswer;
let deadline;

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
let shuffledQuestions, currentQuestionsIndex;
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");
const scoreElement = document.getElementById("score");
const scoreContainer = document.getElementById("score-container");
const initialsElement = document.getElementById("initials");

const questions = [
  {
    question: "who was the first president of the USA?",
    answer: [
      { text: "George Washington", correct: true },
      { text: "Will Smith", correct: false },
      { text: "George Bush", correct: false },
      { text: "Will Graham", correct: false },
    ],
  },

  {
    question: "What year was amazon founded?",
    answer: [
      { text: "1994", correct: true },
      { text: "1998", correct: false },
      { text: "1949", correct: false },
      { text: "1995", correct: false },
    ],
  },

  {
    question: "Whats days does class start?",
    answer: [
      { text: "Tuesday, Thursday and Saturday", correct: true },
      { text: "Tuesday, Thursday and Sunday", correct: false },
      { text: "Monday, Wednesday and Saturday", correct: false },
      { text: "Only Wednesday", correct: false },
    ],
  },

  {
    question: "Which is not a fruit?",
    answer: [
      { text: "Carrots", correct: true },
      { text: "Strawberries", correct: false },
      { text: "Blueberries", correct: false },
      { text: "Raspberries", correct: false },
    ],
  },

  {
    question: "What year was Amazon founded?",
    answer: [
      { text: "1994", correct: true },
      { text: "1900", correct: false },
      { text: "1823", correct: false },
      { text: "1949", correct: false },
    ],
  },
];

startButton.addEventListener("click", function () {
  // THEN a timer starts and I am presented with a question.
  startTimer();
  currentQuestionsIndex = 0;
  showQuestion();
  scoreContainer.classList.add("hide");
  score = 0;
});

var timerId;

function startTimer() {
  console.log("timer started");
  // timer counts down from 3 minutes.
  deadline = new Date().getTime() + MILLISECONDS_IN_MINUTE * 3;

  timerId = setInterval(function () {
    //var now is the current date and time in milliSeconds.
    var now = new Date().getTime();
    // var t is differnece bet the deadline and current time in milliSeconds
    var t = deadline - now;

    var minutes = Math.floor(
      (t % MILLISECONDS_IN_HOUR) / MILLISECONDS_IN_MINUTE
    );
    var seconds = Math.floor((t % MILLISECONDS_IN_MINUTE) / 1000);
    document.getElementById("countdown").innerHTML =
      minutes + "m " + seconds + "s ";

    if (t < 0) {
      endGame();
    }
  }, 1000);
  // when timer reaches zero. end quiz.
}
function showQuestion() {
  console.log("show question");
  //get the first question.
  var questionAnswer = questions[currentQuestionsIndex];
  // append question on page.
  questionElement.innerText = questionAnswer.question;
  questionContainerElement.classList.remove("hide");
  answerButtonElement.children[0].innerText = questionAnswer.answer[0].text;
  answerButtonElement.children[1].innerText = questionAnswer.answer[1].text;
  answerButtonElement.children[2].innerText = questionAnswer.answer[2].text;
  answerButtonElement.children[3].innerText = questionAnswer.answer[3].text;
  startButton.classList.add("hide");
  nextButton.classList.remove("hide");
}

answerButtonElement.addEventListener("click", function (event) {
  //check which child was clicked on
  for (let i = 0; i < answerButtonElement.children.length; i++) {
    var button = answerButtonElement.children[i];
    if (button.innerText === event.target.innerText) {
      selectedAnswer = questions[currentQuestionsIndex].answer[i];
    }
  }
  //get the answer first child
  // set selected answer
});

nextButton.addEventListener("click", function (event) {
  // the next question appears.
  // if users answer === true, then update score.
  console.log(selectedAnswer);
  if (selectedAnswer.correct) {
    score++;
  } else {
    // else subtract 30 secs from time.
    deadline -= 30 * 1000;
  }
  // reset selected answer.
  selectedAnswer = null;
  currentQuestionsIndex++;
  if (currentQuestionsIndex > questions.length - 1) {
    endGame();
    return;
  }
  showQuestion();
});

function endGame() {
  //stop stimer.
  clearInterval(timerId);
  document.getElementById("countdown").innerHTML = "EXPIRED";
  // show score.
  scoreElement.innerHTML = score;
  // save initials local storage.
  scoreContainer.classList.remove("hide");
  // hide questions and answers.
  questionContainerElement.classList.add("hide");
  // hide next button.
  nextButton.classList.add("hide");
  // show start button to play again.
  startButton.classList.remove("hide");
}

function saveScore() {
  var initials = initialsElement.value;
  var player = {
    initials: initials,
    score: score,
  };
  localStorage.setItem("player score", JSON.stringify(player));
}

scoreContainer.addEventListener("submit", function (event) {
  event.preventDefault();
  saveScore();
});
