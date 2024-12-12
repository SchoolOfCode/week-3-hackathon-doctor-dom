function random(num) {
    return Math.floor(Math.random() * num + 1);
}

async function retrieveCharacter() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character/2"); // look at the pages issue
        const json = await response.json();
        return json;
    }
    catch (error) {
        console.error("error: ", error);
    }
}

retrieveCharacter();

async function display() {
    
    const qwert = await retrieveCharacter();
    console.log(qwert.name);
    // console.log(retrieveCharacter().image, json.name, json.species, json.status);
}

display();