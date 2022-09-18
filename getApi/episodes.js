const
    episode = document.getElementById("episode"),
    prev = document.getElementById("prev"),
    next = document.getElementById("next"),
    searchInput = document.getElementById("searchInput"),
    search = document.getElementById("search"),
    start2 = document.getElementById("start2")

function getEpisodes(url) {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        episode.innerHTML = data.results
			.map( (item) => `
            <div class="card">
                <div class="cardInfo">
                    <h3>${item.name}</h3>
                    <p><span>Air date: </span>${item.air_date}</p>
                    <p><span>Were seen: </span>${item.characters.length} characters</p>
                    <p><span>Episode number: </span>${item.episode}</p>
                </div>
            </div>

            `
        )
	.join("");
    });
}

getEpisodes(`https://rickandmortyapi.com/api/episode`);

let counter = 1;

next.addEventListener("click", () => {
	getEpisodes(`https://rickandmortyapi.com/api/episode/?page=${++counter}&name=${searchInput.value}`)
});

prev.addEventListener("click", () => {
	getEpisodes(`https://rickandmortyapi.com/api/episode/?page=${--counter}&name=${searchInput.value}`)
});

search.addEventListener("click", () => {
    getEpisodes(`https://rickandmortyapi.com/api/episode/?name=${searchInput.value}`)
})

start2.addEventListener("click", () => {
    searchInput.value = null;
    getEpisodes(`https://rickandmortyapi.com/api/episode/`)
});