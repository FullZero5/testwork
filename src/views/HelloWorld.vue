<template>
  <div class="bg-white -mt-24 shadow-md rounded-lg overflow-hidden">
    <div
      class="
        items-center
        justify-between
        py-10
        px-5
        bg-white
        shadow-2xl
        rounded-lg
        mx-auto
        text-center
      "
    >
      <div class="px-2 -mt-6">
        <div class="text-center">
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
            {{ msg }}
          </h1>
          <div class="w-full text-center">
            <div class="max-w-sm mx-auto p-1 pr-0 flex items-center">
              <div>
                <div class="max-w-sm mx-auto p-1 pr-0 flex items-center">
                  <Search-Input />
                  <Search-Button />
                </div>
              </div>
            </div>
          </div>
          <div class="card lg:card-side bordered">
            <div class="card-body">
              <h2 class="card-title">Results</h2>
               <List-Forks nameData="getForks"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card lg:card-side bordered">
        <div class="card-body">
            <Pagination/>
        </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/SearchInput.vue"
import SearchButton from "../components/SearchButton.vue"
import ListForks from "../components/ListForks.vue"
import Pagination from "../components/Pagination.vue"

export default {
  name: "HelloWorld",
  components: {
    SearchInput,
    SearchButton,
    ListForks,
    Pagination
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
