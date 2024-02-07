
fetchDogData()

async function fetchDogData(){

    try{
        const dogBreeds = document.getElementById("dogBreeds").value.toLowerCase();
        const response = await fetch(`https://dogapi.dog/api/v2/breeds/${dogBreeds}`);

        if(!response.ok){
            throw new Error("could not fetch resource");
        }
        const data = await response.json();
        console.log(data)

    }
    catch(error){
        console.error(error);

    }



}

