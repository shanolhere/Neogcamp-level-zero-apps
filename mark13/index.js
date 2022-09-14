const date = document.querySelector('.date');
const error = document.querySelector('.error');
const checkBtn = document.querySelector('.check');


checkBtn.addEventListener('click', () => {
  //console.log(typeof date.value)
  if(!date.value){
    error.innerHTML = "Please select a date."
    error.style.visibility = "visible"
  }
  else{
    let bdayDate = date.value.split('-');
    console.log(bdayDate);
    let dateObj = {
      day: Number(bdayDate[2]),
      month:Number(bdayDate[1]),
      year:Number(bdayDate[0])
    }
    //console.log(dateObj)

    let isPalindrome = checkPalindrome(dateObj)
    //console.log(isPalindrome)
    if(isPalindrome){
      error.innerHTML= "Yayy!!! Your birthday is a palindrome.";
      error.style.visibility = "visible"
    }
    else{
      let [count, date] = getNextPalindromeDate(dateObj);
      

      console.log(count,date);
      error.innerHTML= `The next palindrome date is ${date.day}-${date.month}-${date.year}, you missed it by ${count} days! 😔 <br/>`;
      error.style.visibility = "visible"
    }

  }
})

function convertDateToString(dateObj){
  var dateStr = { day: '', month: '', year: '' };
  if(dateObj.day<10){
    dateStr.day = '0'+dateObj.day
  }
  else{
    dateStr.day = dateObj.day.toString()
  }

  if(dateObj.month<10){
    dateStr.month = '0'+dateObj.month
  }
  else{
    dateStr.month = dateObj.month.toString()
  }

  dateStr.year = dateObj.year.toString();

  return dateStr;
}
function getDateFormats(date){
  let dateStr = convertDateToString(date);
  let ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  let mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  let yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  let ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  let mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  let yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy , yymmdd];
}
function checkPalindrome(date){
  let allFormats = getDateFormats(date);
  let palindromeFlag = false
  for(let i=0; i<allFormats.length;i++){
    if( palindrome(allFormats[i]) ){
      palindromeFlag = true;
      break;
    }
    else{
      palindromeFlag = false;
    }
  }
  return palindromeFlag;
}
function palindrome(str){
  return str=== str.split('').reverse().join('');
}
function getNextPalindromeDate(dateObj){
  let nextDateObj = getNextDate(dateObj);
  let count = 0;

  while(1){
    count++;
    let isPalindrome = checkPalindrome(nextDateObj);
    if(isPalindrome){
      break;
    }
    nextDateObj = getNextDate(nextDateObj);
  }
  return [count,nextDateObj];
}

function isLeapYear(year){
  if(year % 400 === 0){
    return true;
  }
  if(year % 100 === 0){
    return false;
  }
  if(year % 4 === 0){
    return true;
  }
  return false;
}
function getNextDate(dateObj){
  let day = dateObj.day +1;
  let month = dateObj.month;
  let year = dateObj.year;

  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if(month === 2){
    if(isLeapYear(year)){
      if(day>29){
        day = 1;
        month+=1;
      }
    }
    else{
      if(day>28){
        day=1;
        month+=1;
      }
    }
  }
  else{
    if(day > daysInMonth[month-1]){
      day = 1;
      month+=1;
    }
  }
  if(month>12){
    month = 1;
    year+=1;
  }

  return {
    day: day,
    month:month,
    year: year
  }
}
