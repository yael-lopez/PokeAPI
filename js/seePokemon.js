const valores = window.location.search;

const id = valores.slice(1, 2);

const url = "https://pokeapi.co/api/v2/";

getPokemon(id)

function getPokemon(id){

    fetch(`${url}pokemon/${id}`)
        .then( resultado => resultado.json() )
        .then( datos => {

            console.log(datos)

            document.querySelector('#name').textContent = datos.name;

            document.querySelector('#imagen').innerHTML = `
                <img src="${datos.sprites.other.dream_world.front_default}" width="250px">
            `;

            datos.moves.forEach( moves => {
                const { move } = moves;
                document.querySelector('#descripcion').textContent += move.name + ", ";
            } )

            document.querySelector('#exp').textContent = datos.base_experience;

        })

}



