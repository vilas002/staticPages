let inputTextEle = document.getElementById("inputText");
let timerEle = document.getElementById("timer");
let count = 10;
let stopInterval = null;
let userText = "";
stopInterval = setInterval(function(){
    timerEle.textContent = count;
    count -= 1;
    if(count === 0){
        timerEle.textContent = "BOOM";
        clearInterval(stopInterval);
    }
},1000)
inputTextEle.addEventListener("keydown",function(event){
    userText += event.key;
    if(userText === "STOP"){
        clearInterval(stopInterval);
    }
})