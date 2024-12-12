function random(num) {
    return Math.floor(Math.random() * num + 1);
}

async function retrieveCharacter() {
    const randomId = random(826);
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`); // look at the pages issue ✅
        const json = await response.json();
        console.log(json);
        return json;
    }
    catch (error) {
        console.error("error: ", error);
    }
}

retrieveCharacter();

let qwert;

async function display() {
    
    qwert = await retrieveCharacter();
    console.log(qwert);
    // console.log(retrieveCharacter().image, json.name, json.species, json.status);
    updateDivs();
}

display();

function updateDivs() {
    const img     = document.getElementById("img");
    const name    = document.getElementById("name");
    const species = document.getElementById("species");
    const status  = document.getElementById("status");

    img.src = qwert.image;
    name.textContent = qwert.name;
    species.textContent = qwert.species;
    status.textContent = qwert.status;

}


const btn = document.getElementById("btn");
btn.addEventListener("click", (retrieveCharacter, display));
// btn.addEventListener("click", display);