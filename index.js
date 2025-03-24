
fetch("https://json-server-by-bob.vercel.app/characters")
    .then(response => response.json())
    .then(characters => {
        const characterBar = document.getElementById("character-bar");

        characters.forEach(character => {
            const span = document.createElement("span");
            span.textContent = character.name;
            span.addEventListener("click", () => displayDetails(character));
            characterBar.appendChild(span);
        });
    });


function displayDetails(character) {
    document.getElementById("name").textContent = character.name;
    document.getElementById("image").src = character.image;
    document.getElementById("image").alt = character.name;
    document.getElementById("vote-count").textContent = character.votes;
    document.getElementById("votes-form").characterId = character.id;
}


document.getElementById("votes-form").addEventListener("submit", function(e) {
    e.preventDefault();  

    let votes = document.getElementById("votes").value;  
    let voteCount = document.getElementById("vote-count");
    let addeVotes = parseInt(votesInput.value) || 0;
    let newVoteCount = currentCharacter.votes + addedVotes;

    

    voteCount.textContent = newVoteCount;
    currentCharacter.votes = newVoteCount;

    
});



document.getElementById("reset-btn").addEventListener("click", function() {
    document.getElementById("vote-count").textContent = "0";
});