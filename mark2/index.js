var readlineSync = require('readline-sync');
const chalk = require('chalk');

//console.log(chalk.blue.bgGreen.bold("Hello Sabiya"));

var userName = readlineSync.question("What is your name?: ")
console.log(chalk.green.bgWhite.bold("Hello", userName));

var age = readlineSync.question("What is your age?: ")
if (age < 18) {
  console.log(chalk.green.bgWhite.bold("Nice to meet you, Kiddo"))
}
else {
  console.log(chalk.green.bgWhite.bold("Nice to meet you, Dude"))
}
console.log(chalk.blue.bold("Lets play a game to check some movie knowledge ;) "))
console.log("----------------------------------------------")
console.log(chalk.red.bold("There are 3 rules for this game."))
console.log(chalk.red.bold("1. There are 5 questions to answer."))
console.log(chalk.red.bold("2. For every right answer, you score 5 points"))
console.log(chalk.red.bold("3. For every wrong answer, you score -1 point"));
console.log("----------------------------------------------")
console.log(chalk.white.bgGreen.bold("Are you Ready?"))

var questionsData = [
  {
    question:
      `Who is the actor in Aakasam Nee Haddhu Ra?
  a: Surya
  b: Adivi Sesh
  c: Prabhas\n`,
    answer: "a"
  },
  {
    question:
      `What is the meaning of Aakasam Nee Haddhu Ra?
  a: Sky is blue
  b: Sky is the limit
  c: Let's fly to Sky\n`,
    answer: "b"
  },
  {
    question:
      `What is the motive of Maara in this movie?
  a: To start a low-cost carrier airline
  b: To become a airlines head
  c: To become an industrialist\n`,
    answer: "a"
  },
  {
    question:
      `Who is the actress in Aakasam Nee Haddhu Ra?
  a: Sruthi Hassan
  b: Jyothika
  c: Aparna BalaMurali\n`,
    answer: "c"
  },
  {
    question:
      `What is the lesson you have learnt from Aakasam Nee Haddhu Ra?
  a: One can work on his dream irrespective of age
  b: Never Give up even if powerful people become an obstacle in your path
  c: Always grateful for the people you love the most
  d: All of the above\n`,
    answer: "d"
  }

]

let usersPlayed = {}
let score = 0;
let highScore = 0;

function play(question, answer) {
  var userAns = readlineSync.question(chalk.blue.bold(question));
  if (answer.toLowerCase() === userAns.toLowerCase()) {
    score = score + 5;
    console.log(chalk.green.bold("Hurray!! You guessed it correct."));
    console.log(chalk.yellow.bgWhite.bold("Your score : " + score))
  }
  else {
    score = score - 1;
    console.log(chalk.red.bold("Your guess is wrong. Even legends can be wrong ;) "));
    console.log(chalk.yellow.bgWhite.bold("Your score : " + score))
  }
}


for (let k = 0; k < questionsData.length; k++) {
  play(questionsData[k].question, questionsData[k].answer)
}

console.log(chalk.green.bold("Yayy! Your score: " + score))
if (score > 0) {
  console.log(chalk.green.bold("Congratulations!! " + userName))
}
else {
  console.log(chalk.green.bold("Try Again!! " + userName))
}

if (score >= highScore) {
  highScore = score;
  winner = userName;
  console.log("------------------------------------------------")
  console.log(chalk.green.bold("Great! You are on our leaderboard, " + userName + "!"));
  console.log(chalk.green.bold("Winner: " + userName));

}

usersPlayed[userName] = score;
console.log(usersPlayed);