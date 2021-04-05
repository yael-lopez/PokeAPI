const url = "https://pokeapi.co/api/v2/";
let contenido = document.querySelector('#contenido');

window.onload = () => getAllPokemones();

function getAllPokemones(){

    Spinner();    //Mostramos el spinner
    
    fetch(`${url}pokemon`)
        .then( resultado => resultado.json() )
        .then( datos => {

            console.log(datos);

            limpiarHTML(); //Quitamos el spinner para que se pueda imprimir los datos

            const {results } = datos;

            results.forEach( pokemon => {

                const url = pokemon.url.split('/');

                contenido.innerHTML += `

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

//Funcion para limpiar el HTML
function limpiarHTML(){
    while(contenido.firstChild){
        contenido.removeChild(contenido.firstChild);
    }
}

//Funcion para mostrar un spinner
function Spinner(){
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-circle');

    divSpinner.innerHTML += `
        <div class="sk-circle1 sk-child"></div>
        <div class="sk-circle2 sk-child"></div>
        <div class="sk-circle3 sk-child"></div>
        <div class="sk-circle4 sk-child"></div>
        <div class="sk-circle5 sk-child"></div>
        <div class="sk-circle6 sk-child"></div>
        <div class="sk-circle7 sk-child"></div>
        <div class="sk-circle8 sk-child"></div>
        <div class="sk-circle9 sk-child"></div>
        <div class="sk-circle10 sk-child"></div>
        <div class="sk-circle11 sk-child"></div>
        <div class="sk-circle12 sk-child"></div>
    `;

    contenido.appendChild(divSpinner);
}


