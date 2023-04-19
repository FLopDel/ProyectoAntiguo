<template>
  <div>
    <div class="bg-black/80">
      <nav
        class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <a href="#">
            <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-black-800
              md:text-2xl
              hover:text-blue-400
              text-white
            

            "
            >
            <img src="../../img/nombre.png" class=" mr-3 w-14 h-14" alt="Flowbite Logo" />

          </router-link>
          </a>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <li class="text-white hover:text-yellow-400 text-lg">
            <a href="#">Home</a>
          </li>
          <li class="text-white hover:text-yellow-400 text-lg">
            <a href="#">Sobre Nosotros</a>
          </li>
          <li class="text-white hover:text-yellow-400 text-lg">
            <a href="#">Carta</a>
          </li>
          <li class="text-white hover:text-yellow-400 text-lg">
            <a href="#">Reservas</a>
          </li>       
          <li class="text-white hover:text-yellow-400 text-lg">
            <a href="#">Ubicacion</a>
          </li>
          <li class="text-white hover:text-yellow-400 text-lg">
            <a href="#">Registro</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
