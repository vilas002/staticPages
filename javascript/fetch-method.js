const url = "https://apis.ccbp.in/jokes/random";
fetch(url)
.then((reponse)=>{
    return reponse.json();
})
.then((jsonData)=> {
    console.log(jsonData);
})
console.log("fetch Done.");