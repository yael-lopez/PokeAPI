const url = "https://pokeapi.co/api/v2/";

getAllPokemones();

function getAllPokemones(){
    
    fetch(`${url}pokemon?limit=100&offset=200`)
        .then( resultado => resultado.json() )
        .then( datos => {

            console.log(datos);

            const {results } = datos;

            results.forEach( pokemon => {

                const url = pokemon.url.split('/');

                document.querySelector('#contenido').innerHTML += `

                    <div class="card col-sm-3 p-2 mb-2 ">

                        <div class="card-header" 
                            style="background-color: #141DE6; color: white; text-transform: uppercase;"> 

                            Informacion del pokemon

                        </div>

                        <div class="card-body">

                            <p> Nombre del pokemon: 

                                <span style="text-transform: uppercase; color: #F55515;"> ${pokemon.name} </span>
                                
                            </p>

                        </div>

                        <div class="card-footer">

                            <a class="btn btn-info" href="verPokemon.html?${url[6]}"> Mas informacion </a>

                        </div>
                    
                    </div>

                `;

            });

        } );

}


