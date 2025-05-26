let questions = [
  {
    count: 'Frage 1',
    question: 'Welche Programmiersprache wird häufig für Webentwicklung verwendet?',
    question_1: 'Python',
    question_2: 'JavaScript',
    question_3: 'C++',
    right_answer: 2,
  },
  {
    count: 'Frage 2',
    question: "Was versteht man unter 'Version Control'?",
    question_1: 'Ein System zur Steuerung von Softwareversionen',
    question_2: 'Ein Antivirusprogramm',
    question_3: 'Ein grafisches Tool zur UI-Gestaltung',
    right_answer: 1,
  },
  {
    count: 'Frage 3',
    question: "Was ist ein 'Pull Request' in Git?",
    question_1: 'Eine Anfrage, Code von einem Branch in einen anderen zu übernehmen',
    question_2: 'Ein Fehlerbericht',
    question_3: 'Ein automatisches Backup',
    right_answer: 1,
  },
  {
    count: 'Frage 4',
    question: "Was beschreibt der Begriff 'Agile Softwareentwicklung'?",
    question_1: 'Ein iterativer Entwicklungsansatz mit regelmäßigen Feedbackzyklen',
    question_2: 'Ein festes Wasserfallmodell mit klaren Phasen',
    question_3: 'Ein Hardware-basiertes Entwicklungsmodell',
    right_answer: 1,
  },
  {
    count: 'Frage 5',
    question: "Wofür steht das 'D' im SOLID-Prinzip?",
    question_1: 'Dependency Inversion Principle',
    question_2: 'Dynamic Typing',
    question_3: 'Data Abstraction',
    right_answer: 1,
  },
];

let currentquestion = 0;
let correctAnswers = 0;
let cartBodyRef = document.getElementById('cart-body');
let listGroupRef = document.getElementById('list-group');
let nextButtonRef = document.getElementById('next-button');
let endQuiuzRef = document.getElementById('end-quiz');

function updateProgressBar() {
  let scrollbar = (currentquestion + 1) / questions.length;
  scrollbar = Math.round(scrollbar * 100);
  document.getElementById('progress-bar').innerText = `${scrollbar} %`;
  document.getElementById('progress-bar').style = `width: ${scrollbar}%;`;
}

function showNextQuestion() {
    let question = questions[currentquestion];
    document.getElementById('count-question-1-5').innerText = currentquestion + 1;
    document.getElementById('count-question').innerText = question.count;
    document.getElementById('questiontext').innerText = question.question;

    for (let i = 1; i <= 3; i++) {
        document.getElementById(`answer_${i}`).innerText = question[`question_${i}`];
    }
}

function rightAnswerSelected(selectedQuestionNumber, question) {
  return selectedQuestionNumber == question['right_answer'];
}

function rightAnswer(selection) {
  console.log('Richtige antwort');
  document.getElementById(selection).classList.add('bg-success');
  correctAnswers++;
}

function wrongAnswer(idOfRightAnswer, selection) {
  console.log('Falsche antwort');
  document.getElementById(selection).classList.add('bg-danger');
  document.getElementById(idOfRightAnswer).classList.add('bg-success');
}

function afterLastquestion() {
  return currentquestion + 1 >= questions.length;
}

function changeButton(button) {
  button.innerText = 'Neustart';
  button.setAttribute('onclick', 'restartGame()');
  button.disabled = false;
}

function showEndscreen() {
  cartBodyRef.classList.add('d-none');
  listGroupRef.classList.add('d-none');
  endQuiuzRef.classList.remove('d-none');
  document.getElementById('count-right-answer').innerText = correctAnswers;
  document.getElementById('all-questions').innerText = currentquestion + 1;
}

function showStartScrren() {
  cartBodyRef.classList.remove('d-none');
  listGroupRef.classList.remove('d-none');
  endQuiuzRef.classList.add('d-none');
  document.getElementById('next-button').innerText = 'Nächste Frage';
  document.getElementById('next-button').setAttribute('onclick', 'nextQuestion()');
}