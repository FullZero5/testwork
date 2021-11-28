<template>
 <div class="tabs">
      <router-link to="/" class="tab"> Home</router-link>
      <router-link to="/favorites" class="tab">Favorites</router-link>
      <router-link to="/about" class="tab">About</router-link>
    </div>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>