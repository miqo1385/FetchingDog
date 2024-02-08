fetch("https://dogapi.dog/api/v2/breeds")
    .then(response => {
        if(!response.ok){
            throw new Error("could not fetch resource");
        }
        return response.json();
    })
    .then(data => console.log(data.id))
    .catch(error => console.error(error));
