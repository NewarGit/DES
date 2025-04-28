

import { questions } from "./questions_full.js";

  
  const quizContainer = document.getElementById('quiz');
  const submitBtn = document.getElementById('submit-btn');
  const resultContainer = document.getElementById('result');
  
  function loadQuiz() {
    questions.forEach((q, index) => {
      const questionBlock = document.createElement('div');
      questionBlock.classList.add('question-block');
  
      const questionTitle = document.createElement('h3');
      questionTitle.innerText = `${index + 1}. ${q.question}`;
      questionBlock.appendChild(questionTitle);
  
      q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = option;
        btn.addEventListener('click', () => selectOption(btn, q.answer));
        questionBlock.appendChild(btn);
      });
  
      quizContainer.appendChild(questionBlock);
    });
  }
  
  function selectOption(button, correctAnswer) {
    // const allOptions = button.parentElement.querySelectorAll('.option-btn');
    // allOptions.forEach(btn => {
    //   btn.disabled = true;
    // });
  
    if (button.innerText === correctAnswer) {
      button.classList.add('correct');
    } else {
      button.classList.add('wrong');
    }
  }
  
  submitBtn.addEventListener('click', () => {
    let correctAnswers = document.querySelectorAll('.correct').length;
    resultContainer.innerText = `You got ${correctAnswers} out of ${questions.length} correct!`;
  });
  
  // Load quiz on page start
  loadQuiz();
  