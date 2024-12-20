// plan 

// MVP1 
// select API to use (Rick & Morty Characters) ✅
// test API, verify and confirm data matches what we need ✅
// sketch basic HTML UI and identify which data to display ✅
// create fetch request async function ✅
// create DOM elements to display data ✅
// add error handling ✅
// is data being presented and readable? ✅
// check if runs in different browsers ✅ (tested in chrome, edge and safari) 

// MVP 2
// create 'player cards' ✅
// neaten CSS ✅

// MVP 3
// add 'search character' compatibility - need to insert a search box

async function retrieveCharacter() {
    const randomId = Math.floor(Math.random() * 826 + 1);
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);  // look at the pages issue ✅
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error("Error: unable to find character. ", error);
    }
}

async function displayCharacter() {
    const characterInfo = await retrieveCharacter();
    
    let statusIcon = "";
    if (characterInfo.status === "Alive")   { statusIcon = "🟢"; }
    if (characterInfo.status === "Dead")    { statusIcon = "🔴"; }
    if (characterInfo.status === "unknown") { statusIcon = "⚫"; }
    
    document.getElementById("img").src              = characterInfo.image;
    document.getElementById("name").textContent     = characterInfo.name;
    document.getElementById("species").textContent  = "Species: " + characterInfo.species;
    document.getElementById("gender").textContent   = "Gender: " + characterInfo.gender;
    document.getElementById("status").textContent   = `Status: ${statusIcon} ` + characterInfo.status;
    document.getElementById("location").textContent = "Location: " + characterInfo.location.name;
    document.getElementById("origin").textContent   = "Origin: " + characterInfo.origin.name;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", (displayCharacter));
