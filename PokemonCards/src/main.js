const baseURL =
	"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const pokemonContainer = document.querySelector(".pokemon-container");

for (let i = 1; i <= 151; i++) {
	const pokemon = document.createElement("div");
	pokemon.classList.add("pokemon");
	const pokemonImage = document.createElement("img");
	pokemonImage.src = `${baseURL}${i}.png`;

	const pokemonId = document.createElement("p");
	pokemonId.innerText = `${i}`;

	pokemon.appendChild(pokemonImage);
	pokemon.appendChild(pokemonId);
	pokemonContainer.appendChild(pokemon);
}
