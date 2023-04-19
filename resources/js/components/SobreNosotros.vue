<template>
  <div class="m-4 flex justify-center">
    <img id="linea" src="../../img/lineas.png" alt="lineas">
    <h2 id="about">About us</h2>
    <img id="linea" src="../../img/lineas.png" alt="lineas">
  </div>
  <div class="m-4 flex justify-center">
    <p id="subtitulo">
      We love restaurants as much as you do. That’s why we’ve been helping them fill tables since 1999. Welcome to
      elixir restaurant
    </p>
  </div>

  <h2 id="title">The History</h2>
  <div id="textImg">
    <div>
      <p id="description">
        The History of Kitchens and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that
        "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables".
        Numerous commentators have also referred to the supposed restaurant owner's eccentric habit of touting for custom
        outside his establishment, dressed in aristocratic fashion and brandishing a sword
      </p>
      <div>
        <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" :pagination="{ clickable: true, }" :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide>
            <a href="#">
              <img className="w-full h-96" src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                alt="image slide 1" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#">
              <img className="w-full h-96"
                src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg" alt="image slide 2" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#">
              <img className="w-full h-96" src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                alt="image slide 3" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style scoped>
#about {
  text-align: center;
  font-family: "Cabin";
  font-weight: 600;
  font-size: 28px;
  color: #383733;
  text-transform: uppercase;
}

#linea {
  margin: 14px;
  color: #D1BC87;
  vertical-align: text-bottom;
}

#subtitulo {
  text-align: center;
  font-family: "Cabin";
  font-weight: 400;
  font-style: italic;
  font-size: 17px;
  color: #777777;
  margin-bottom: 60px;
}

#title {
  font-family: "Great Vibes", serif;
  font-size: 62px;
  color: #c0a756;
  margin-bottom: 30px;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
  
