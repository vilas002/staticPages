let data = {
    name: "Kailas",
    email: `kailas_${Date.now()}@example.com`, // Ensures a unique email every run
    status: "active"
};

let options = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer gorest_sixwFM5kzXusslraX0M65h53iRIqsllEvQ3k2lHOQzy2DtZXh"
    },
    body: JSON.stringify(data)
};

let url = "https://gorest.co.in/public/v3/users/01a1e86e-be5e-7ee5-83ec-5092ca69687e";
fetch(url, options )
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {
    console.log(jsonData);
});