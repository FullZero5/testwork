<template>
  <div class="overflow-x-auto">
    <table class="table w-full" v-if="list.length !== 0">
      <thead>
      <tr>
        <th>Name</th> 
        <th>Url</th> 
        <th>Action</th> 
      </tr>
    </thead> 
      <ItemList v-for="(item, index) in list" :key="index" :data="item" />
    </table>
    <div class="w-full text-center" v-else>
      <h1
            class="
              font-normal
              text-3xl text-grey-800
              font-medium
              leading-loose
              my-3
              w-full
            "
          >
              ¯\_(ツ)_/¯
          </h1>
    </div>
  </div>
</template>

<script>
import ItemList from "./ItemList.vue";

export default {
  name: "ListForks",
  props: {
    nameData: String
  },
  components: {
    ItemList
  },
  computed: {
    list() {
      return this.$store.getters[`${this.nameData}`]
    }
  }
};
</script>