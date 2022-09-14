const answerArray = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3"];

const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');

const form = document.querySelector('form');
const quizCards = document.querySelectorAll('.quiz');

let score = 0;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  // console.log(data[1]);
  let index = 0;
  for(let i of data){
    if(i[1]== answerArray[index]){
      quizCards[index].style.backgroundColor = "green";
      score++;
    }
    else{
      quizCards[index].style.backgroundColor = "red";
    }
    index++;
  }
  message.innerHTML = `You score: ${score}`;
  checkBtn.style.display="none"

})
