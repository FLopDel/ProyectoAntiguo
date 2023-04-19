<template>
    <div class="m-4 flex justify-center items-center">
        <img id="linea" src="../../img/lineas.png" alt="lineas">
        <h2 id="reservation" class="text-center">Reservation</h2>
        <img id="linea" src="../../img/lineas.png" alt="lineas">
    </div>

    <div>
        <p id="introuction" class="text-center italic">
            Booking a table has never been so easy with free & instant online restaurant reservations, booking now!!
        </p>
    </div>

    <div>
        <img id="gorro" class="text-center" src="../../img/gorro.png" alt="gorro">
        <div class="m-4 flex justify-center items-center">
            <img id="linea" src="../../img/linea.png" alt="lineas">
            <h4 id="spans" class="text-center">Welcome to Elixir</h4>
            <img id="linea" src="../../img/linea.png" alt="lineas">
        </div>
        <h1 id="textReservation" class="text-center uppercase">MAKE A RESERVATION</h1>
        <div class="m-4 flex justify-center items-center">
            <img id="linea" src="../../img/linea.png" alt="lineas">
            <h4 id="spans" class="text-center">Open Hours</h4>
            <img id="linea" src="../../img/linea.png" alt="lineas">
        </div>

        <p id="hours" class="text-center">Sunday to Tuesday 09.00 - 24:00 Friday and Sunday 08:00 - 03.00</p>

        <h3 id="number" class="text-center uppercase">+1-506-890-0179</h3>
    </div>

    <div>
        <div>
            <input type="date" id="date" name="date" placeholder="Date">
            <input type="time" id="time" name="time" placeholder="Time">
            <input type="date" id="date" name="date" placeholder="Name">
        </div>
        <div>
            
            <input type="time" id="time" name="time" placeholder="Email">
            <input type="text" id="party" name="party" placeholder="Phone">
        </div>
    </div>
</template>

<style scoped>
#linea {
    width: 120px;
    height: 10px;
}

#reservation {
    font-family: "Cabin";
    font-weight: 600;
    font-size: 28px;
    color: #383733;
    text-transform: uppercase;
}

#introuction {
    font-family: "Cabin";
    font-weight: 400;
    font-size: 17px;
    color: #777777;
    margin-bottom: 60px;
}

#gorro {
    display: block;
    width: 70px;
    height: 58px;
    background-repeat: no-repeat;
    margin-bottom: 2px;
    margin: 0 auto;
    content: " ";
    -webkit-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#spans {
    font-family: "Yellowtail";
    font-size: 25px;
    color: #141313;
    font-weight: 400;
}


#textReservation {
    color: #444342;
    font-family: "Oswald", sans-serif;
    font-size: 48px;
    font-weight: 400;
}

#hours {
    font-family: "Cabin", sans-serif;
    font-weight: 500;
    color: #7d7a7a;
    font-size: 18px;
    margin: 20px 0px;
}

#number {
    color: #444342;
    font-family: "Oswald", sans-serif;
    font-size: 48px;
    font-weight: 400;
    margin: 15px 0px 15px 0px;
}
</style>