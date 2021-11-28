<template>
  <div class="bg-white -mt-24 shadow-md rounded-lg overflow-hidden">
    <div class="card lg:card-side bordered">
      <div class="card-body">
        <h2 class="card-title text-center">Favorites</h2>
        <List-Forks nameData="getFavorites" />
      </div>
    </div>
  </div>
</template>

<script>
import ListForks from "../components/ListForks.vue"

export default {
  name: "favoritesPage",
  components: {
    ListForks,
  },
}
</script>

<style>
</style>