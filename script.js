const quiz = document.querySelector(".quiz");

const button = document.querySelector(".button");

button.addEventListener('click', () => {
    quiz.className += ' open-quiz';
    console.log(quiz.className);
});

