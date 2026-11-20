let formData =  {
    name : "",
    email : "",
    status: "Inactive",
    gender : "Female"
}
let myFromEle = document.getElementById("myForm");
let nameErrorMsgEle = document.getElementById("nameErrorMsg");
let emailErrorMsgEle = document.getElementById("emailErrorMsg");
let emailEle = document.getElementById("email");
let statusEle = document.getElementById("status");
let genderMaleEle = document.getElementById("genderMale");
function genderChange(event){
    formData.gender = event.target.value;
}
genderMaleEle.addEventListener("change",genderChange);

let genderFemaleEle = document.getElementById("genderFemale");
function genderChangeFemale(event){
    formData.gender = event.target.value;
}
genderFemaleEle.addEventListener("change",genderChangeFemale);

function statusChange(event){
    formData.status = event.target.value;
}
statusEle.addEventListener("change", statusChange);

let nameEle = document.getElementById("name");
nameEle.addEventListener("blur", function(event){
    if(event.target.value === ""){
        nameErrorMsgEle.textContent = "Required*"
    }else{
        nameErrorMsgEle.textContent = "";
    }
    formData.name = nameEle.value;

})
emailEle.addEventListener("blur", function(event){
    if(event.target.value === ""){
        emailErrorMsgEle.textContent = "Required*"
    }else{
        emailErrorMsgEle.textContent = "";
    }
    formData.email = emailEle.value;
})

function formEventFunc(event){
    event.preventDefault();
    console.log(formData);
    
};
myFormEle.addEventListener("submit",formEventFunc);