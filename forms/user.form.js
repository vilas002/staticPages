let myFromEle = document.getElementById("myForm");
let nameErrorMsgEle = document.getElementById("nameErrorMsg");
let emailErrorMsgEle = document.getElementById("emailErrorMsg");
let emailEle = document.getElementById("email");
function formEventFunc(event){
    event.preventDefault();
};
myFormEle.addEventListener("submit",formEventFunc);

let nameEle = document.getElementById("name");
nameEle.addEventListener("blur", function(event){
    if(event.target.value === ""){
        nameErrorMsgEle.textContent = "Required*"
    }else{
        nameErrorMsgEle.textContent = "";
    }

})
emailEle.addEventListener("blur", function(event){
    if(event.target.value === ""){
        emailErrorMsgEle.textContent = "Required*"
    }else{
        emailErrorMsgEle.textContent = "";
    }
})