function init() {
    document.getElementById("question-lenght").innerText = questions.length;
    showQuestion();
    
}

function showQuestion() {
    updateProgressBar();
    showNextQuestion();
}

function answer(selection) { 
    let question = questions[currentquestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`
    if (rightAnswerSelected(selectedQuestionNumber, question)) {
        rightAnswer(selection);
    } else {
        wrongAnswer(idOfRightAnswer, selection);
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    let button = document.getElementById('next-button');
    if (afterLastquestion()) {
        changeButton(button);
        resetAnswerButton();
        showEndscreen();
    } else {
        currentquestion++;
        button.disabled = true;
        resetAnswerButton()
        showQuestion();
    }
}

function resetAnswerButton() {
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-danger');
}

function restartGame() {
    console.log("Neustart gedrückt!");
    currentquestion = 0;
    correctAnswers = 0;
    showStartScrren();
    init();
}




