// Selecting the container element for characters
let charactersContainer = document.getElementById("characters-container");

// Fetching data from the Rick and Morty API
fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json()) // Parsing the JSON response
  .then(data => { // Handling the fetched data
    // Iterating through each character in the results
    data.results.forEach(function(character) {
      // Creating a new div element for each character
      const newDiv = document.createElement("div");
      // Adding a class name to the new div
      newDiv.className = "card";
      // Appending the new div to the characters container
      charactersContainer.appendChild(newDiv);
      // Setting the inner HTML of the new div with character details
      newDiv.innerHTML = `
        <img src="${character.image}" alt="${character.name}" class="character-image">
        <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
        <p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p>
        <p class="character-detail"><span class="attribute">Species:</span> ${character.species}</p>
      `;
    });
  });
