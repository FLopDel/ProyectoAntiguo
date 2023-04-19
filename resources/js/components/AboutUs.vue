<template>
  <div class="m-4 flex justify-center items-center">
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
  <div id="cajaGrande" class="ml-60 mr-60">
    <div id="caja" class="flex justify-center m-8 p-4">
      <p id="description" class="m-8">
        The History of Kitchens and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that
        "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables".
        Numerous commentators have also referred to the supposed restaurant owner's eccentric habit of touting for custom
        outside his establishment, dressed in aristocratic fashion and brandishing a sword
      </p>
      <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }" :pagination="{ clickable: false, }" :navigation="false" :modules="modules" class="mySwiper">
        <swiper-slide id="swiper">
          <img id="img" src="../../img/img1.jpg" alt="image slide 1" />
        </swiper-slide>
        <swiper-slide id="swiper">
          <img id="img" src="../../img/img2.jpg" alt="image slide 2" />
        </swiper-slide>
        <swiper-slide id="swiper">
          <img id="img" src="../../img/img3.jpg" alt="image slide 3" />
        </swiper-slide>
      </swiper>


    </div>
  </div>

  <div id="cajaGrande" class="ml-60 mr-60">
    <div id="caja" class="flex justify-center m-8 p-4">

      <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }" :pagination="{ clickable: false, }" :navigation="false" :modules="modules" class="mySwiper">
        <swiper-slide id="swiper">
          <img id="img" src="../../img/about1.jpg" alt="image slide 1" />
        </swiper-slide>
        <swiper-slide id="swiper">
          <img id="img" src="../../img/about2.jpg" alt="image slide 2" />
        </swiper-slide>
        <swiper-slide id="swiper">
          <img id="img" src="../../img/about3.jpg" alt="image slide 3" />
        </swiper-slide>
      </swiper>
      <p id="description" class="m-8">
        The History of Kitchens and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that
        "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables".
        Numerous commentators have also referred to the supposed restaurant owner's eccentric habit of touting for custom
        outside his establishment, dressed in aristocratic fashion and brandishing a sword
      </p>

    </div>
  </div>
</template>

<style scoped>
#caja {
  display: flex;
  justify-content: center;
  margin: auto;
}



#description {
  justify-content: center;
  width: 500px;
  height: 300px;
  text-align: center;
  display: flex;
  align-items: center;
}

.mySwiper {
  width: 800px;
}

.mySwiper {
  display: flex;
  justify-content: center;
  align-items: center;
}

#swiper img {
  margin: auto;
}


/* Estilos para móvil */
@media screen and (max-width: 1024px) {
  #caja {
    flex-direction: column;
    align-items: center;
  }

  #cajaGrande{
    margin: 0;
  }

  #description {
    width: auto;
    height: auto;
    margin-left: 0;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .mySwiper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .mySwiper img {
    width: 100%;
  }


}



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
  
