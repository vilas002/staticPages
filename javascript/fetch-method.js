const url = "https://apis.ccbp.in/jokes/random";
const responseObject = fetch(url);
responseObject.then((reponse)=>{
    return reponse.json();
})
.then((data)=> {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
console.log("fetch Done.");