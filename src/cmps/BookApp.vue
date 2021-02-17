<template>
  <section class="book-app">
    <div class="top-container flex j-between a-center">
      <book-filter :initialStr="initialFilterStr" @filtered="onFilter" />
      <book-sorter />
      <div class="flex a-center">
        <img class="pointer" src="@/assets/imgs/grid.png" alt @click="displayStyle = 'grid'" />
        <div class="seperator"></div>
        <img class="pointer" src="@/assets/imgs/list.png" alt @click="displayStyle = 'list'" />
      </div>
    </div>
    <book-list :books="booksToShow" :displayStyle="displayStyle" />
  </section>
</template>


<script>
import BookFilter from './BookFilter.vue'
import BookSorter from './BookSorter.vue'
import BookList from './BookList.vue'
export default {
  components: {
    BookList,
    BookFilter,
    BookSorter,
  },
  data() {
    return {
      displayStyle: 'list',
    }
  },
  methods: {
    onFilter(filterBy) {
      // TODO: make route dynamic with search params
      this.$store.commit({ type: 'setFilter', filterBy })
    },
  },
  computed: {
    booksToShow() {
      return this.$store.getters.booksToShow
    },
    initialFilterStr() {
      return this.$route.query.search || ''
    },
  },
}
</script>