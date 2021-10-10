const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex;


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion();
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
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

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]


// Second quiz
const startButton2 = document.getElementById('start-btn2')
const nextButton2 = document.getElementById('next-btn2')
const questionContainerElement2 = document.getElementById('question-container2')
const questionElement2 = document.getElementById('question2')
const answerButtonsElement2 = document.getElementById('answer-buttons2')

let shuffledQuestions2, currentQuestionIndex2;

// 2 Quiz
startButton2.addEventListener('click', startGame2);
nextButton2.addEventListener('click', () => {
  currentQuestionIndex2++;
  setNextQuestion2();
});

// 2 StartGame function
function startGame2() {
  startButton2.classList.add('hide')
  shuffledQuestions2 = questions2.sort(() => Math.random() - .5)
  currentQuestionIndex2 = 0
  questionContainerElement2.classList.remove('hide')
  setNextQuestion2();
}

// 2 setNextQuestion function
function setNextQuestion2() {
  resetState2()
  showQuestion2(shuffledQuestions2[currentQuestionIndex2])
}

// 2 showQuestion function
function showQuestion2(question) {
  questionElement2.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer2)
    answerButtonsElement2.appendChild(button)
  })
}

// 2 resetState function
function resetState2() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement2.firstChild) {
    answerButtonsElement2.removeChild(answerButtonsElement2.firstChild)
  }
}

// 2 selectAnswer function
function selectAnswer2(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement2.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions2.length > currentQuestionIndex2 + 1) {
    nextButton2.classList.remove('hide')
  } else {
    startButton2.innerText = 'Restart'
    startButton2.classList.remove('hide')
  }
}

// 2 Quiz questions
const questions2 = [
  {
    question: 'What is 100 + 100?',
    answers: [
      { text: '100100', correct: false },
      { text: '200', correct: true }
    ]
  }
];