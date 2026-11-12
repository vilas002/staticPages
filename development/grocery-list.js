let bgContainer = document.createElement("div");
bgContainer.classList.add("bg-container");
document.body.appendChild(bgContainer);

let h1Ele = document.createElement("h1");
h1Ele.classList.add("heading");
h1Ele.textContent = "Grocery Items";
bgContainer.appendChild(h1Ele);

let unEle = document.createElement("ul");
unEle.classList.add("grocery-card");
bgContainer.appendChild(unEle);
let groceryList = ["milk","Peanut Butter", "Chaco chips","Tamto Sauce","Cup Cakes", "Noodels"];
groceryList.map( (item) => {
    let listEle = document.createElement("li");
    listEle.textContent = item;
    unEle.appendChild(listEle);
})

let inputEle = document.createElement("input");
inputEle.type = "checkbox";
inputEle.id="myCheckbox";
bgContainer.appendChild(inputEle);

let labelEle = document.createElement("label");
labelEle.setAttribute("for", "myCheckbox");
labelEle.id = "myCheckbox";
labelEle.textContent = "Need Home Delivery";
labelEle.classList.add("delivery-text");
bgContainer.appendChild(labelEle);

let btnEle = document.createElement("button");
btnEle.classList.add("btn", "btn-primary");
btnEle.textContent = "Proceed to Devliery";

let brEle = document.createElement("br");
bgContainer.appendChild(brEle);
bgContainer.appendChild(btnEle);
