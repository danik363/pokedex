const API = 'https://pokeapi.co/api/v2';

const math = Math.random();
const cardContainer = document.getElementById('pokemon-card-container');




const getRandomId = (min, max) => {
    return Math.floor((Math.random() * (max - min)) + min);
}

async function fetchData(urlApi, id){
    try{
        const response = await fetch(`${urlApi}/pokemon/${id}`);
        const pokemon = await response.json();

        return pokemon;
    }catch(error){
        alert(error);
    }   
}


(async function(){
    const ramdonId = getRandomId(1, 890);
    const pokemon = await fetchData(API, ramdonId);

    const templatePokemon = ` 
        <article>
            <div class="background-top">
                <img class="pokemonPhoto" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            </div>
            
            <div class="pokemonDetails">
                <p class="name-hp"><span>${pokemon.name}</span>  ${pokemon.stats[0].base_stat}hp</p>
                <p class="exp">${pokemon.base_experience} xp</p>
                <div class="pokemonAtributes">
                    <p class="attack"> Attack <br> <span>${pokemon.stats[1].base_stat}</span></p>
                    <p class="specialAttack">Special Attack <br> <span> ${pokemon.stats[3].base_stat} </span></p>
                    <p class="defense">Defense <br> <span>${pokemon.stats[2].base_stat}</span></p>
                </div>
            </div>
        </article>
        `;
    cardContainer.innerHTML = templatePokemon;
})();