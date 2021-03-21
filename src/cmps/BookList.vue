<template>
  <section class="book-list" :class="displayClass">
    <book-preview v-for="book in books" :book="book" :displayStyle="displayStyle" :key="book._id" />
  </section>
</template>

<script>
import BookPreview from './BookPreview.vue'
export default {
  props: {
    books: Array,
    displayStyle: String,
  },
  components: {
    BookPreview,
  },
  computed: {
    displayClass() {
      return this.displayStyle === 'list'
        ? 'disp-list'
        : 'disp-grid grid j-center'
    },
  },
}
</script>