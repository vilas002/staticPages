let counterEle = document.getElementById("counter");
function increaseNumber(){
    let previousValue = counterEle.textContent;
    let updateCount = parseInt(previousValue) +1 ;
    counterEle.textContent =  updateCount;
}
function decreaseNumber(){
    let previousValue = counterEle.textContent;
    let updateCount = parseInt(previousValue) -1 ;
    counterEle.textContent =  updateCount;
}
function resetNumber(){
    counterEle.textContent = 0;
}