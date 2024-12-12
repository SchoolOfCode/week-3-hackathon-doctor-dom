function random(num) {
    return Math.floor(Math.random() * num);
}

async function retrieveCharacter() {
    const response = await fetch("https://rickandmortyapi.com/api/character?page=42");
      const json = await response.json();
      return json;
}

console.log(retrieveCharacter())