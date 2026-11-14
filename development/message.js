let userTextEle = document.getElementById("userText");
let saveBtnEle = document.getElementById("saveBtn");
saveBtnEle.onclick = function() {

    let storageUserValue = userTextEle.value;
    localStorage.setItem("userText", storageUserValue);
    
}
let getDataLocally = localStorage.getItem("userText");

if(getDataLocally === null){
    userTextEle.value = "";
}else{
    userTextEle.value = getDataLocally;
}