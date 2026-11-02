const url = "https://apis.ccbp.in/jokes/random";
fetch(url)
.then((reponse)=>{
    return reponse.json();
})
.then((data)=> {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
console.log("fetch Done.");