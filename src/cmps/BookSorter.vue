<template>
  <article class="book-sorter flex a-center">
    <label class="pointer" @click="onChangeParams('name')">A-z</label>
    <i
      v-if="sortParams.by === 'name'"
      class="arrow"
      :class="sortParams.directionReversed ? 'up' : 'down'"
    ></i>
    <div class="seperator"></div>
    <label class="pointer" @click="onChangeParams('price')">Price</label>
    <i
      v-if="sortParams.by === 'price'"
      class="arrow"
      :class="sortParams.directionReversed ? 'up' : 'down'"
    ></i>
    <div class="seperator"></div>
    <label class="pointer" @click="onChangeParams('date')">Date</label>
    <i
      v-if="sortParams.by === 'date'"
      class="arrow"
      :class="sortParams.directionReversed ? 'up' : 'down'"
    ></i>
  </article>
</template>

<script>
export default {
  data() {
    return {
      books: this.$store.getters.allBooks,
      sortParams: {
        by: '',
        directionReversed: false,
      },
    }
  },
  methods: {
    onChangeParams(sortBy) {
      switch (sortBy) {
        case 'name':
          this.sortParams.by === 'name'
            ? (this.sortParams.directionReversed = !this.sortParams
                .directionReversed)
            : (this.sortParams.by = 'name')
          break
        case 'price':
          this.sortParams.by === 'price'
            ? (this.sortParams.directionReversed = !this.sortParams
                .directionReversed)
            : (this.sortParams.by = 'price')
          break
        case 'date':
          this.sortParams.by === 'date'
            ? (this.sortParams.directionReversed = !this.sortParams
                .directionReversed)
            : (this.sortParams.by = 'date')
          break
      }
      this.onSortBooks()
    },
    async onSortBooks() {
      await this.$store.dispatch({
        type: 'sortBooks',
        sortParams: this.sortParams,
      })
    },
  },
}
</script>