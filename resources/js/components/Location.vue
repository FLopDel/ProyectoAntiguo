<template>
    <div class="m-12 flex justify-center items-center">
        <img id="linea" src="../../img/lineas.png" alt="lineas">
        <h2 id="ubication" class="text-center ml-2 mr-2">Ubication</h2>
        <img id="linea" src="../../img/lineas.png" alt="lineas">
    </div>


    <div id="cajaGrande">
        <div id="cajaMapa" class="columna-1">
            <img id="mapa" src="../../img/mapa.jpg" alt="Descripción de la imagen">
        </div>
        <div id="information" class="grid justify-between text-center">
            <div class="m-4 ">
                <h2 id="dato">Nombre </h2>
                <p id="info" class="text-white">
                    La Fuente
                </p>
            </div>
            <div class="m-4 ">
                <h2 id="dato">Dirección </h2>
                <p id="info" class="text-white">
                    Avenida Federico, 12
                </p>
            </div>
            <div class="m-4 ">
                <h2 id="dato">Teléfono </h2>
                <p id="info" class="text-white">
                    958543243
                </p>
            </div>
            <div class="m-4 ">
                <h2 id="dato">Email </h2>
                <p id="info" class="text-white">
                    lafuente@restaurante.com
                </p>
            </div>
        </div>
    </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Great+Vibes&family=Noto+Sans+TC:wght@500&family=Oswald:wght@200;300;400&display=swap');

#dato {
    color: white;
    text-decoration: underline;
    font-family: 'Oswald', sans-serif;
}

#cajaGrande {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
}

#cajaMapa {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
}

#mapa {
    width: 80%;
    height: 500px;
    object-fit: cover;
}

#information {
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 55%;
    height: auto;
    background-color: #383733;
    border-radius: 5px;
}


#information div {
    margin-bottom: 1rem;
}

#information h2 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

#information p {
    font-size: 1rem;
}

/* Estilos para tablets y dispositivos con mayor resolución */
@media screen and (min-width: 1025) {
    #cajaGrande {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        align-items: center;
    }

    #cajaMapa {
        margin-bottom: 0;
        height: auto;
    }

    #information {
        padding: 1rem;
        text-align: center;
    }

    #information div {
        margin-bottom: 2rem;
    }

    #information h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    #information p {
        font-size: 1.2rem;
    }
}

#ubication {
    font-family: "Cabin";
    font-weight: 600;
    font-size: 28px;
    color: #383733;
    text-transform: uppercase;
}
</style>