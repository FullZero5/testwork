<template>
      <input 
      :value="message" 
      @input="updateMessage" 
      class="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
      placeholder="owner/repositoryName"/>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'inputSearch',
    computed: {
      ...mapGetters({
        message: 'getSearch'
      })
      /*...mapState({
        message: state => state.owner
      })*/
    },
    methods: {
      updateMessage (e) {
        this.$store.commit('SET_DATA', e.target.value)
      }
    }
}
</script>
