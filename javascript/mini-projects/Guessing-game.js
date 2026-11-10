let VerifyBtnEle = document.getElementById("VerifyBtn");
let inputTextEle = document.getElementById("inputText");
let ErrorMsgEle = document.getElementById("ErrorMsg");
let randomNum = Math.random()*10;
let roundNum = Math.ceil(randomNum);
VerifyBtnEle.onclick = function(){
    let inputTextValue = inputTextEle.value;
    if(roundNum == parseInt(inputTextValue)){
        ErrorMsgEle.style.color = "green";
        ErrorMsgEle.style.backgroundColor = "white";
        ErrorMsgEle.textContent = "Congratulations you Enter correct Number " + roundNum;
    }else{
        ErrorMsgEle.textContent = "Enter Wrong Random Number Please try again " + roundNum;
        ErrorMsgEle.style.color = "Red";
        ErrorMsgEle.style.backgroundColor = "white";
    }
}