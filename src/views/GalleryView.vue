<script setup>
import { RouterLink } from 'vue-router'
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";
</script>
<template>
  <Header />
  <div class="container my-40 mx-auto">
    <div class="grid grid-cols-1 w-full md:w-1/2 mx-auto p-5 md:p-0">
      <div class="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] p-10 py-14 border-2 border-black rounded-lg hover:drop-shadow-xl mb-2">
        <RouterLink to="/gallery/creative-space" class="text-4xl md:text-5xl font-semibold">
          Creative Space
        </RouterLink>
      </div>
      <div class="p-10 py-14 border-2 border-black rounded-lg">
        <RouterLink to="/gallery/theme-painting" class="text-4xl md:text-5xl font-semibold">Theme Painting</RouterLink>
      </div>
<!--      <RouterLink to="/gallery/creative-space" class="px-10 py-14 border-2 border-black rounded-lg text-5xl font-semibold mb-2 drop-shadow-lg hover:drop-shadow-xl">
        Creative Space
      </RouterLink>
      <RouterLink to="/gallery/theme-painting" class="p-10 py-14 border-2 border-black rounded-lg text-5xl font-semibold">Theme Painting</RouterLink>-->
    </div>
  </div>
  <Footer />

</template>

style