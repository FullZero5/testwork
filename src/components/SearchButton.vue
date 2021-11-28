<template>
  <div 
    data-tip="Fill in the field" 
    :class="isEmptyOwner || isEmptyRepositoryName ? 'tooltip': ''">
    <button 
     @click="search"
     :class="isEmptyOwner || isEmptyRepositoryName ? 'cursor-not-allowed' : ''"
     :disabled="isEmptyOwner || isEmptyRepositoryName"
     class="bg-blue-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-indigo-600 p-3">
     Search</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name:'ButtonSerch',
    computed: {
     ...mapGetters([
         'isEmptyOwner',
         'isEmptyRepositoryName'
     ])
    },
    methods: {
    ...mapActions({
      search: 'GET_FORKS'
    })
  }
}
</script>