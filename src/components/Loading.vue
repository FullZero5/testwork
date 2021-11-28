<template>
  <div
    v-if="getLoaded"
    class="
      absolute
      inset-0
      z-50
      bg-blue-200
      flex
      justify-center
      items-center
      transition-all
      opacity-100
      ease-in-out
      duration-1000
      h-screen
    "
    id="page-loader"
  >
    <!-- Loader -->
    <div class="absolute top-1/2 left-1/2 -ml-24 -mt-3">
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      {{ msg }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'loading',
    props: {
        msg: {
         type: String,
         default: 'Loading ...'
        }
    },
    computed: {
     ...mapGetters([
         'getLoaded'
     ])
    },
};
</script>

<style>
</style>