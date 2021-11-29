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
            About
          </h1>
          <div class="w-full text-center">
            <div class="max-w-sm mx-auto p-1 pr-0">
              Application for finding repositories forks
            </div>
          </div>
          <div class="card lg:card-side bordered">
            <div class="card-body">
              <h2 class="card-title">How to use</h2>
               In the input field, enter the link in the format
               <b>:owner/:repositoryName </b>
               <br>for example nuxt/nuxt.js
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'aboutPage'

}
</script>

<style>

</style>