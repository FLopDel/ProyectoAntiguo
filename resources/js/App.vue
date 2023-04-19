<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import Home from './components/Home.vue'
import AboutUs from './components/AboutUs.vue'
import Reservation from './components/Reservation.vue'
import Location from './components/Location.vue'



</script>

<template>
    <Header></Header>
    <div id="principal">
        <main>
            <!-- <Home></Home> -->
            <!-- <AboutUs></AboutUs> -->
            <Reservation></Reservation>
            <!-- <Location></Location> -->
        </main>
        <Footer></Footer>
    </div>
</template>

<style>
    ::-webkit-scrollbar{
        display: none;
    }

</style>