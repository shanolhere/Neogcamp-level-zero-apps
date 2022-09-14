const optionContainer = document.querySelectorAll('.option-container');
const radioBtns = document.querySelectorAll('input[type="radio"]');


//console.log(optionContainer.length, radioBtns.length)
radioBtns[0].addEventListener('change', () => {
  optionContainer[0].style.display="flex";
  optionContainer[1].style.display="none";
  optionContainer[2].style.display="none";
})

radioBtns[1].addEventListener('change', () => {
  optionContainer[1].style.display="flex";
  optionContainer[0].style.display="none";
  optionContainer[2].style.display="none";
})

radioBtns[2].addEventListener('change', () => {
  optionContainer[2].style.display="flex";
  optionContainer[1].style.display="none";
  optionContainer[0].style.display="none";
})

//calarea1
const base = document.querySelector('.base');
const height = document.querySelector('.height');

const check1 = document.querySelector('.check1');
const message1 = document.querySelector('.message1');

check1.addEventListener('click', () => {
  // console.log("c")
  const baseVal = Number(base.value);
  const heightVal = Number(height.value);

  if(!baseVal || !heightVal){
    message1.innerHTML = "Please enter data."
  }
  else{
    message1.innerHTML = (baseVal * heightVal)/2
  }
})

//calArea2
const length1 = document.querySelector('.length1');
const length2 = document.querySelector('.length2');
const length3 = document.querySelector('.length3');

const check2 = document.querySelector('.check2');
const message2 = document.querySelector('.message2');

check2.addEventListener('click', () => {
  // console.log("c")
  const length1Val = Number(length1.value);
  const length2Val = Number(length2.value);
  const length3Val = Number(length3.value);

  if(!length1Val || !length2Val || !length3Val){
    message2.innerHTML = "Please enter data."
  }
  else{
    let s = (length1Val + length2Val + length3Val)/2;
    message2.innerHTML = Math.sqrt(s * (s-length1Val)* (s-length2Val)* (s-length3Val))
  }
})

//calArea3
const side1 = document.querySelector('.side1');
const side2 = document.querySelector('.side2');
const anglec = document.querySelector('.anglec');

const check3 = document.querySelector('.check3');
const message3 = document.querySelector('.message3');

check3.addEventListener('click', () => {
  // console.log("c")
  const side1Val = Number(side1.value);
  const side2Val = Number(side2.value);
  const anglecVal = Number(anglec.value);

  if(!side1Val || !side2Val || !anglecVal){
    message3.innerHTML = "Please enter data."
  }
  else{
    message3.innerHTML = (side1Val * side2Val * Math.sin(anglecVal*Math.PI/180))/2;
    }
})
