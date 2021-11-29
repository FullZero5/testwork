<template>
  <div class="btn-group" v-if="pageCount !== 0">
    <button class="btn" v-if="page !== 1" @click="change(false)">
      Previous
    </button>
    <button
      class="btn"
      v-for="(item, index) in pagination"
      :key="index"
      @click="set(item)"
      :class="page === item ?'btn-active':''"
    >
      {{ item }}
    </button>
    <button class="btn" v-if="page !== total / limit" @click="change(true)">
      Next
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Pagination",
  data() {
    return {
      delta: 2,
    };
  },
  created() {
    this.$route.params.page = this.page
  },
  watch:{
    page: {
     handler: function (val, oldVal) { console.log(val, oldVal) },
     immediate: true
    },
    $route (to){
      let { page } = to.query
      console.log(page)
   }
  },
  computed: {
    ...mapGetters({
      total: "totalForks",
      limit: "getLimits",
      page: "getPage",
    }),
    pageCount() {
      return this.total / this.limit;
    },
    pagination() {
      const separate = (a, b) => [
        a,
        ...({
          0: [],
          1: [b],
          2: [a + 1, b],
        }[b - a] || ["...", b]),
      ];

      return Array(this.delta * 2 + 1)
        .fill()
        .map((_, index) => this.page - this.delta + index)
        .filter((page) => 0 < page && page <= this.pageCount)
        .flatMap((page, index, { length }) => {
          if (!index) return separate(1, page);
          if (index === length - 1) return separate(page, this.pageCount);
          return [page];
        });
    },
  },
  methods: {
    ...mapMutations({
      set: "SET_PAGE",
      change: "PAGE_CHANGE",
    }),
  },
};
</script>