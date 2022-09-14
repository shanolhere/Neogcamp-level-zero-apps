const submitBtn = document.querySelector('.submit');
const input = document.querySelector('.input');
const output = document.querySelector('.output');

var url = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input)
{
    return url + "?" +"text=" + input //input
}

function errorHandler(error)
{
    console.log("error occured", error);
    alert("Something went wrong with server! Try again after some time.")
}

function clickHandler()
{
    var inputText = input.value;
    fetch(getTranslationURL(inputText))  //processing
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        output.innerText = translatedText; //output
        input.innerHTML="";
    }).catch(errorHandler)
}

submitBtn.addEventListener("click",clickHandler)
