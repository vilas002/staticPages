let counterEle = document.getElementById("counter");
let counterCardEle = document.getElementById("counterCard");
function increaseNumber(){
    let previousValue = counterEle.textContent;
    let updateCount = parseInt(previousValue) +1 ;
    counterEle.textContent =  updateCount;
    
    if(updateCount > 0){
        counterEle.style.color = "blue";
        counterCardEle.style.transform = "rotate(45deg)";

    }else if(updateCount < 0){
        counterEle.style.color = "Red";
        counterCardEle.style.transform = "rotate(-45deg)";
    }else{
        counterEle.style.color = "black";
    }
    
}
function decreaseNumber(){
    let previousValue = counterEle.textContent;
    let updateCount = parseInt(previousValue) -1 ;
    counterEle.textContent = updateCount;
    if(updateCount > 0){
        counterEle.style.color = "blue";
        counterCardEle.style.transform = "rotate(45deg)";
    }else if(updateCount < 0){
        counterEle.style.color = "Red";
        counterCardEle.style.transform = "rotate(-45deg)";
    }else{
        counterEle.style.color = "black";
    }
    
}
function resetNumber(){
    counterEle.textContent = 0;
    counterEle.style.color = "black";
    counterCardEle.style.transform = "rotate(0deg)";
    

}