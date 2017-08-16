console.log("security_questions.js loaded");

let securityQuestions = [
  {question: "Who is Obama?",
   expectedAnswer: "previous president"},
  {question: "Capital of CA?",
   expectedAnswer: "Sacramento"},
  {question: "Who is Obaba\'s wife?",
   expectedAnswer: "Michelle"}
]

function validate() {
  for (let i = 0; i < securityQuestions.length; i++) {
    let ans = prompt(securityQuestions[i].question);

    if (ans === securityQuestions[i].expectedAnswer) {
      return;
    }
  }

  alert("Sorry. Authentication Failed.");
}

validate();
