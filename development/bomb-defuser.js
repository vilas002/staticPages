let inputTextEle = document.getElementById("inputText");
let timerEle = document.getElementById("timer");
let count = 10;
let stopInterval = null;

stopInterval = setInterval(function(){
    timerEle.textContent = count;
    count -= 1;
    if(count === 0){
        timerEle.textContent = "BOOM";
        clearInterval(stopInterval);
    }
},1000)
inputTextEle.addEventListener("keydown",function(event){
    let userValue = inputTextEle.value;
    
    if(userValue === "STOP" && event.key === "Enter" && count !== 0){
        timerEle.textContent = "You archived it.";
        clearInterval(stopInterval);
    }
})