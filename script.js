async function retrieveCharacter() {
    const randomId = Math.floor(Math.random() * 826 + 1);
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

let qwert;

async function display() {
    
    qwert = await retrieveCharacter();

    const img     = document.getElementById("img");
    const name    = document.getElementById("name");
    const species = document.getElementById("species");
    const status  = document.getElementById("status");
    
    img.src = qwert.image;
    name.textContent = qwert.name;
    species.textContent = qwert.species;
    status.textContent = qwert.status;
}

// display();

const btn = document.getElementById("btn");
btn.addEventListener("click", (retrieveCharacter, display));
// btn.addEventListener("click", display);
