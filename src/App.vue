<template>
  <div id="app" class="container mx-auto my-8 py-10 max-w-5xl">
    <!-- <div class="flex flex-col justify-center items-center mx-auto my-8 py-10"> -->
      <Loading />
      <Navigation />
      <div
        :style="{
          'background-image': 'url(' + require('./assets/bg.png') + ')',
        }"
        class="
          bg-gray-300
          h-64
          w-full
          rounded-lg
          shadow-md
          bg-cover bg-center
        "
      ></div>
      <router-view></router-view>
    <!-- </div> -->
  </div>
</template>

<script>
import Loading from "./components/Loading.vue";
import Navigation from "./components/Navigation.vue";

import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Loading,
    Navigation,
  },
  created() {
    this.getFavorites();
    document.title = "Search forks repository";
  },
  methods: {
    ...mapActions({
      getFavorites: "GET_FAVORITES",
    }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
