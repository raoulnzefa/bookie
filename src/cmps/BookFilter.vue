<template>
  <form class="book-filter">
    <input type="text" placeholder="Search" v-model="filterBy.txt" @input="filtered" />
  </form>
</template>

<script>
export default {
  props: {
    initialStr: String,
  },
  data() {
    return {
      filterBy: {
        txt: this.initialStr || '',
      },
    }
  },
  methods: {
    filtered() {
      this.$emit('filtered', { ...this.filterBy })
    },
  },
  // TODO: force to search on startup as well, not just while typing
  // (calling filtered() doesn't work in mounted() nor in created())
}
</script>