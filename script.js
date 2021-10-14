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
    question: 'In which HTML tag do we put JavaScript?',
    answers: [
      { text: 'link', correct: false },
      { text: 'javascript', correct: false },
      { text: 'script', correct: true},
      { text: 'js', content: false}
    ]
  },
  {
    question: 'Where is more better way to insert our JavaScript?',
    answers: [
      { text: '<body> section', correct: true },
      { text: '<head> section', correct: false },
      { text: 'we have to write inline scripts', correct: false },
      { text: 'no correct choice', correct: false }
    ]
  },
  {
    question: 'How to create function in JavaScript?',
    answers: [
      { text: 'function myFunc()', correct: true },
      { text: 'function: myFunc', correct: false },
      { text: 'def myFunc', correct: false },
      { text: 'myFunc = function()', correct: false }
    ]
  },
  {
    question: 'How do we call a function named "myFunc"?',
    answers: [
      { text: 'public static void myFunc', correct: false },
      { text: 'myFunc()', correct: true },
      { text: 'call myFunc()', correct: false},
      { text: 'new myFunc()', correct: false}
    ]
  },
  {
    question: 'How can you add comments in JavaScript?',
    answers: [
      { text: '// comment', correct: true },
      { text: '<!-- comment -->', correct: false },
      { text: '# comment', correct: false},
      { text: '* comment *', correct: false}
    ]
  },
  {
    question: 'Which operator is used to compare exact values?',
    answers: [
      { text: 'isEqual()', correct: false },
      { text: '=', correct: false },
      { text: '==', correct: false},
      { text: '===', correct: true}
    ]
  },
  {
    question: `What is the result of "console.log(1 + '2')"`,
    answers: [
      { text: 'SyntaxError', correct: false },
      { text: '3', correct: false },
      { text: '12', correct: true},
      { text: 'NaN', correct: false}
    ]
  },
  {
    question: `JavaScript is script version of Java?`,
    answers: [
      { text: 'No', correct: true },
      { text: 'Yes', correct: false }
      
    ]
  },
  {
    question: `How to output "Hello!" in the console?`,
    answers: [
      { text: 'System.out.println("Hello!")', correct: false },
      { text: 'print("Hello!")', correct: false },
      { text: 'alert("Hello!")', correct: false },
      { text: 'console.log("Hello!")', correct: true }
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
    question: `What will be the result of this code?
                function addNums() {
                  let res = 0;
                  for(let i = 0; i < 5; i++) {
                    res += i;
                  }
                  return res;
                }
              `,
    answers: [
      { text: '0', correct: false },
      { text: '5', correct: false },
      { text: '10', correct: true},
      { text: '11', content: false}
    ]
  },
  {
    question: `Will we be able to call function with function declaration above it?`,
    answers: [
      {text: 'Yes', correct: true},
      {text: 'NO', correct: false}
    ]
  },
  {
    question: `We can say that ECMAScript and JavaScript are the same?`,
    answers: [
      {text: 'Yes', correct: true},
      {text: 'No', correct: false}
    ]
  },
  {
    question: `Choose the not appropriate one:`,
    answers: [
      {text: 'codewars.com', correct: false},
      {text: 'hackerrank.com', correct: false},
      {text: 'leetcode.com', correct: false},
      {text: 'tiktok.com', correct: true}
    ]
  },
  {
    question: `What is the difference between map() and forEach() methods?`,
    answers: [
      {text: 'map() returns new array', correct: true},
      {text: 'map() is not method', correct: false},
      {text: 'forEach and map are the same', correct: false},
      {text: 'forEach() is not a method', correct: false}
    ]
  }
];


// Third quiz
const startButton3 = document.getElementById('start-btn3')
const nextButton3 = document.getElementById('next-btn3')
const questionContainerElement3 = document.getElementById('question-container3')
const questionElement3 = document.getElementById('question3')
const answerButtonsElement3 = document.getElementById('answer-buttons3')

let shuffledQuestions3, currentQuestionIndex3 = 0;

// 3 Quiz
startButton3.addEventListener('click', startGame3);
nextButton3.addEventListener('click', () => {
  currentQuestionIndex3++;
  setNextQuestion3();
});

// 3 StartGame function
function startGame3() {
  startButton3.classList.add('hide')
  shuffledQuestions3 = questions3.sort(() => Math.random() - .5)
  currentQuestionIndex3 = 0
  questionContainerElement3.classList.remove('hide')
  setNextQuestion3();
}

// 3 setNextQuestion function
function setNextQuestion3() {
  resetState3()
  showQuestion3(shuffledQuestions3[currentQuestionIndex3])
}

// 3 showQuestion function
function showQuestion3(question) {
  questionElement3.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer3)
    answerButtonsElement3.appendChild(button)
  })
}

// 3 resetState function
function resetState3() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement3.firstChild) {
    answerButtonsElement3.removeChild(answerButtonsElement3.firstChild)
  }
}

// 3 selectAnswer function
function selectAnswer3(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement3.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions3.length > currentQuestionIndex3 + 1) {
    nextButton3.classList.remove('hide')
  } else {
    startButton3.innerText = 'Restart'
    startButton3.classList.remove('hide')
  }
}

const questions3 = [
  {
    question: 'In which HTML tag do we put JavaScript?',
    answers: [
      { text: 'link', correct: false },
      { text: 'javascript', correct: false },
      { text: 'script', correct: true},
      { text: 'js', content: false}
    ]
  }
];