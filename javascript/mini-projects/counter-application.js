let counterEle = document.getElementById("counter");
function increaseNumber(){
    let previousValue = counterEle.textContent;
    let updateCount = parseInt(previousValue) +1 ;
    counterEle.textContent =  updateCount;
    if(updateCount > 0){
        counterEle.style.color = "blue";
    }else if(updateCount < 1){
        counterEle.style.color = "Red";
    }else{
        counterEle.style.color = "white"
    }
    counterEle.textContent =  updateCount;
}
function decreaseNumber(){
    let previousValue = counterEle.textContent;
    let updateCount = parseInt(previousValue) -1 ;
    
    if(updateCount > 0){
        counterEle.style.color = "blue";
    }else if(updateCount < 1){
        counterEle.style.color = "Red";
    }else{
        counterEle.style.color = "white"
    }
    counterEle.textContent =  updateCount;
}
function resetNumber(){
    counterEle.textContent = 0;
    counterEle.style.color = "white";
    

}