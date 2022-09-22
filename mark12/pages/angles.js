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
  else if(angle1.value<=0 || angle2.value<=0 || angle3.value<=0){
    message.innerHTML = "Please enter values greater than 0."
  }
  else{
    if(Number(angle1.value) + Number(angle2.value) + Number(angle3.value) === 180 && (Number(angle1.value)>0 && Number(angle2.value)>0 && Number(angle3.value)>0) ){
      message.innerHTML = "Yay! These angles can make a triangle!"
    }
    else{
      message.innerHTML = "Oops! These angles cannot make a triangle"
    }
  }
})
