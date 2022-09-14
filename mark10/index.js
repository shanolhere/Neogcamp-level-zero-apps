const billAmt = document.querySelector('.billAmt')
const nextBtn = document.querySelector('.next')

const cashContainer = document.querySelector('.cash-container')
const cashReceived = document.querySelector('.cashReceived')
const checkBtn = document.querySelector('.check')

const error = document.querySelector('.error');

const balanceContainer = document.querySelector('.balance-table');
const noOfNotes = document.querySelectorAll('.noOfNotes')

const arrayNotes = [2000, 500, 100, 20, 10, 5, 1];

nextBtn.addEventListener('click', () => {
  if(!billAmt.value || billAmt.value<0){
    error.innerHTML = "Please enter bill Amount";
  }
  else{
    error.innerHTML = "";
    nextBtn.style.display="none";
    cashContainer.style.visibility = "visible";
    //console.log(typeof billAmt.value)
  }
})

checkBtn.addEventListener('click', () => {
  clearNoOfNotes();
  if(!cashReceived.value || cashReceived.value< billAmt.value){
    error.innerHTML = "Please enter Correct Cash Amount";
  }
  else{
    error.innerHTML = "";
    calculateNotes(Number(billAmt.value), Number(cashReceived.value));
    balanceContainer.style.visibility = "visible";

  }
})


function calculateNotes(bill,cash){
  //console.log(typeof bill,cash)
  let returnAmount = cash - bill;
  //console.log(returnAmount,arrayNotes.length)
  if(returnAmount <1){
    error.innerHTML = "No amount should be returned."
  }
  balanceContainer.style.visibility = "visible";
  for(let i=0;i<arrayNotes.length;i++){
    returnAmount = compare(returnAmount,arrayNotes[i], i)
  }
}

function compare(returnAmount, noteAmt, index){
  if(returnAmount >= noteAmt){
    let remainder= Math.floor(returnAmount / noteAmt);
    returnAmount = returnAmount - remainder * noteAmt;
    noOfNotes[index].innerHTML = `${remainder}`;
  }
  return returnAmount;
}

function clearNoOfNotes() {
  for (let notes of noOfNotes) {
    notes.innerText = "";
  }
}
