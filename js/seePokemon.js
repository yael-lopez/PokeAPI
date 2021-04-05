const valores = window.location.search;

const id = valores.slice(1, 2);

const url = "https://pokeapi.co/api/v2/";

let datos = document.querySelector('#datos');

window.onload = () => getPokemon(id);

function getPokemon(id){

    if(id){

        Spinner();

        fetch(`${url}pokemon/${id}`)
            .then( resultado => resultado.json() )
            .then( datos => {

                document.querySelector('.sk-circle').remove();

                document.querySelector('#name').textContent = datos.name;

                document.querySelector('#imagen').innerHTML = `
                    <img src="${datos.sprites.other.dream_world.front_default}" width="250px">
                `;

                datos.moves.forEach( moves => {
                    const { move } = moves;
                    document.querySelector('#descripcion').textContent += move.name + ", ";
                } )

                document.querySelector('#exp').textContent = datos.base_experience;

            });
    }else{
        const mensaje = document.createElement('h1');
        mensaje.classList.add('text-center', 'text-info', 'text-uppercase');
        mensaje.textContent = "No se encontro el pokemon";

        datos.appendChild(mensaje);

        document.querySelector('#descripcion').remove();
        document.querySelector('.card-body').remove();
        document.querySelector('.col-sm-6').remove();
    }

}

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

    datos.appendChild(divSpinner);
}

function limpiarHTML(){
    while(datos.firstChild){
        datos.removeChild(datos.firstChild);
    }
}


