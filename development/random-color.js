let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let changeColorBtnEle = document.getElementById("changeColorBtn");
let randomBgcardEle = document.getElementById("randomBgcard");
changeColorBtnEle.onclick = function() {
    let randomNums = Math.random() * 8;
    let randomIndex  = Math.ceil(randomNums);
    randomBgcardEle.style.backgroundColor = bgColorsArray[randomIndex]; 
}