var readlineSync = require('readline-sync');
const chalk = require('chalk');
//console.log(chalk.blue.bgGreen.bold("Hello Sabiya"));

var userName = readlineSync.question("What is your name?: ")
console.log(chalk.green.bgWhite.bold("Hello", userName, "Nice to meet you."))

console.log(chalk.blue.bold("Lets play a game to check how well do you know me??"))
console.log("----------------------------------------------")
console.log(chalk.red.bold("There are 3 rules for this game."))
console.log(chalk.red.bold("1. There are 5 questions to answer."))
console.log(chalk.red.bold("2. For every right answer, you score 5 points"))
console.log(chalk.red.bold("3. For every wrong answer, you score -1 point"));
console.log("----------------------------------------------")
console.log(chalk.white.bgGreen.bold("Are you Ready?"))

var questions = [
  {
    question: "What is my name?",
    answer: "Sabiya"
  },
  {
    question: "Where am I working?",
    answer: "Unemployed"
  },
  {
    question: "Which quote I love the most?",
    answer: "Never Give Up"
  },
  {
    question: "What song I like the most now?",
    answer: "Unstoppable by Sia"
  },
  {
    question: "How can you describe sabiya's dreams?",
    answer: "Sky is the limit"
  },

]

let score = 0

function play(question, answer) {
  //console.log(question, answer)
  var userAnswer = readlineSync.question(chalk.yellow.bold(question));
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    score= score+5;
    console.log(chalk.green.bold("Hurray!! You guessed it correct."));
    console.log(chalk.yellow.bgWhite.bold("Your score : "+score))
  }
  else{
    score=score-1;
    console.log(chalk.red.bold("Your guess is wrong. Even legends can be wrong ;) "));
    console.log(chalk.yellow.bgWhite.bold("Your score : "+score))
  }


}


for (let i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}


console.log(chalk.green.bold("Yayy! Your score: "+score))
if(score>0) {
  console.log(chalk.green.bold("Congratulations!! "+userName))
}
else{
  console.log(chalk.green.bold("Try Again!! "+userName))
}