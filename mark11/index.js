const date = document.querySelector('.date');
const luckyNum = document.querySelector('.luckyNum');
const checkBtn = document.querySelector('.check');

const message = document.querySelector('.message');
const result = document.querySelector('.result');
const image = document.querySelector('.animated-gif');

checkBtn.addEventListener('click', () => {
  if(!date.value || !luckyNum.value){
    message.innerHTML = "Please enter the data. ";
    message.style.visibility="visible";
  }
  else{

  const dateValue = date.value;
  console.log(dateValue.split("-"));
  const dateSum = dateValue.split("-").reduce((ac,i)=> {return ac+Number(i)},0);
  console.log(dateSum);
  if(dateSum % Number(luckyNum.value) === 0 && luckyNum){
    message.innerHTML = "You are luckyyyy!!!! ";
    image.src = "assets/happy.gif";
    result.style.visibility="visible";
  }
  else{
    message.innerHTML = `Oh no!! You're missed by ${dateSum % Number(luckyNum.value)} days from being lucky.`;
    image.src = "assets/sad.gif";
    result.style.visibility="visible";
   }
  }
})
