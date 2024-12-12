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

async function displayCharacter() {
    
    const characterInfo = await retrieveCharacter();

    const img     = document.getElementById("img");
    const name    = document.getElementById("name");
    const species = document.getElementById("species");
    const status  = document.getElementById("status");
    
    img.src             = characterInfo.image;
    name.textContent    = characterInfo.name;
    species.textContent = characterInfo.species;
    status.textContent  = characterInfo.status;
}

// displayCharacter();

const btn = document.getElementById("btn");
btn.addEventListener("click", (retrieveCharacter, displayCharacter));
// btn.addEventListener("click", displayCharacter);
