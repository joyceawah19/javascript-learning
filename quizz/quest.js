let submitButton = document.querySelector("#submit");
let isAnswered = false;

function totalscore() {
  if (!isAnswered) {
    submitButton.innerHTML = "Submitting...";
    const questions = document.querySelectorAll(".question");
    let score = 0;

    questions.forEach((question) => {
      const selectedAnswer = question.querySelector(
        'input[type="radio"]:checked'
      );
      score += parseInt(selectedAnswer.value);

      const answers = question.querySelectorAll('input[type="radio"]');
      answers.forEach((answer) => {
        answer.name = "";
        if (parseInt(answer.value) == 1) {
          // console.log(answer.value)
          answer.checked = true;
          answer.style.accentColor = "green";
        }
      });

      if (parseInt(selectedAnswer.value) == 0) {
        selectedAnswer.style.accentColor = "red";
      } else {
        selectedAnswer.style.accentColor = "green";
      }
    });

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Your score is: ${score} out of ${questions.length}`;
    // refresh();
    isAnswered = true;
    submitButton.innerHTML = "Reset";
  } else {
    location.reload();
  }
}


