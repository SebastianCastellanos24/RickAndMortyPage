const
    locations = document.getElementById("locations"),
    prev = document.getElementById("prev"),
    next = document.getElementById("next"),
    searchInput = document.getElementById("searchInput"),
    search = document.getElementById("search"),
    start2 = document.getElementById("start2"),
    planets = document.getElementById("planets"),
    clusters = document.getElementById("clusters"),
    space = document.getElementById("space"),
    tv = document.getElementById("tv"),
    dreams = document.getElementById("dreams"),
    microverse = document.getElementById("microverse"),
    fantasy = document.getElementById("fantasy"),
    games = document.getElementById("game")

function getLocations(url) {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        locations.innerHTML = data.results
			.map( (item) => `
            <div class="card">
                <div class="cardInfo">
                    <h3>${item.name}</h3>
                    <p><span>Type: </span>${item.type}</p>
                    <p><span>Dimension: </span>${item.dimension}</p>
                    <p><span>Residents: </span>${item.residents.length}</p>
                </div>
            </div>
            
            `
        )
	.join("");
    });
}

getLocations(`https://rickandmortyapi.com/api/location`);

let counter = 1;

next.addEventListener("click", () => {
	getLocations(`https://rickandmortyapi.com/api/location/?page=${++counter}&name=${searchInput.value}`)
});

prev.addEventListener("click", () => {
	getLocations(`https://rickandmortyapi.com/api/location/?page=${--counter}&name=${searchInput.value}`)
});

search.addEventListener("click", () => {
    getLocations(`https://rickandmortyapi.com/api/location/?name=${searchInput.value}`)
})

planets.addEventListener("click", () => {
    getLocations(`https://rickandmortyapi.com/api/location/?type=planet`)
})

clusters.addEventListener("click", () => {
    getLocations(`https://rickandmortyapi.com/api/location/?type=cluster`)
})

space.addEventListener("click", () => {
    getLocations(`https://rickandmortyapi.com/api/location/?type=Space Station`)
})

tv.addEventListener("click", () => {
    getLocations(`https://rickandmortyapi.com/api/location/?type=tv`)
})

dreams.addEventListener("click", () => {
    getLocations(`https://rickandmortyapi.com/api/location/?type=dream`)
})

microverse.addEventListener("click", () => {
    getLocations(`https://rickandmortyapi.com/api/location/?type=microverse`)
})

fantasy.addEventListener("click", () => {
    getLocations(`https://rickandmortyapi.com/api/location/?type=fantasy town`)
})

games.addEventListener("click", () => {
    getLocations(`https://rickandmortyapi.com/api/location/?type=game`)
})

start2.addEventListener("click", () => {
    searchInput.value = "";
    getLocations(`https://rickandmortyapi.com/api/location`)
});