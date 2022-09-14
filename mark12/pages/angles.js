const angle1 = document.querySelector('.angle1');
const angle2 = document.querySelector('.angle2');
const angle3 = document.querySelector('.angle3');

const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');

checkBtn.addEventListener('click', () => {
  //console.log(angle1.value);
  if(!angle1.value || !angle2.value || !angle3.value){
    message.innerHTML = "Please enter the data."
  }
  else{
    if(Number(angle1.value) + Number(angle2.value) + Number(angle3.value) === 180){
      message.innerHTML = "Yay! These angles can make a triangle!"
    }
    else{
      message.innerHTML = "Oops! These angles cannot make a triangle"
    }
  }
})
