<template>
  <tbody>
    <tr>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="w-12 h-12 mask mask-squircle">
              <img
                :src="data.owner.avatar_url"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div class="font-bold">
              {{ data.owner.login }}
            </div>
            <div class="text-sm opacity-50">
              <a :href="data.owner.html_url" class="link link-primary">{{
                data.owner.html_url
              }}</a>
            </div>
          </div>
        </div>
      </td>
      <td>
        {{ data.ssh_url }}
      </td>
      <td>
        <div data-tip="copy url" class="tooltip">
          <button @click="copyToClickBoard(data.ssh_url)" class="btn btn-link btn-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
        <div data-tip="favourites" class="tooltip">
          <button @click="add(data)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              :fill="statusFavorites(data.id) ? 'yellow': 'none'"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill-opacity="0.5"
              stroke-opacity="0.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "Item",
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters(["statusFavorites"])
  },
  methods: {
    copyToClickBoard(content) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          console.log("Text copied to clipboard...");
        })
        .catch((err) => {
          console.log("Something went wrong", err);
        });
    },
    ...mapActions({
      add:'ADD_FAVORITES'
    })
  },
};
</script>

<style>
</style>