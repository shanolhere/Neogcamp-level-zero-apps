const length1 = document.querySelector('.length1');
const length2 = document.querySelector('.length2');

const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');

checkBtn.addEventListener('click', () => {
  //console.log(angle1.value);
  if(!length1.value || !length2.value){
    message.innerHTML = "Please enter the data."
  }
  else{
      message.innerHTML = Math.sqrt(Math.pow(Number(length1.value),2) + Math.pow(Number(length2.value),2))
  }
})
