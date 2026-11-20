let inputSkillEle = document.getElementById("inputSkill");
let addSkillEle = document.getElementById("addSkill");
let listTaskEle = document.getElementById("listTask");
let count = 0;
addSkillEle.onclick = function(){
    let divEle = document.createElement("div");
    divEle.classList.add("d-flex flex-row");
    listTaskEle.appendChild(divEle);

    let inputEle = document.createElement("input");
    inputEle.type = "checkbox";
    inputEle.id= "myTask" + count + 1;
    inputEle.style.width = "900px";
    inputEle.style.height = "50px";
    inputEle.classList.add("my-checkbox");
    divEle.appendChild(inputEle);

    let labelEle = document.createElement("label");
    labelEle.textContent ="Learn "+inputEle.value;
    labelEle.classList.add("skilss")
    inputEle.appendChild(labelEle);
}