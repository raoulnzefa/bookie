<template>
  <div>
    <article class="book-preview flex" :class="displayClass">
      <router-link :to="`/book/${book._id}`" class="img-container">
        <img :src="book.thumbnail" />
        <div v-if="book.listPrice.isOnSale">
          <label class="pointer">SALE</label>
        </div>
      </router-link>
      <div class="flex col full-width">
        <div class="title-container flex a-center">
          <strong class="title">{{book.title}}</strong>
          <div class="seperator horizontal"></div>
          <span class="muted">{{book.publishedDate}}</span>
        </div>
        <ul class="authors" v-for="author in book.authors" :author="author" :key="author">
          <li>{{author}}</li>
        </ul>
        <p v-if="displayStyle === 'list'" class="description grow">{{book.description}}</p>
        <long-txt v-if="displayStyle === 'grid'" class="description grow" :txt="book.description" />
        <small class="book-length muted">{{readLength}}</small>
        <div class="flex j-between a-center">
          <label
            class="price"
            :class="[
            book.listPrice.amount > 150 ? 'red' : '',
            book.listPrice.amount < 20 ? 'green' : '',
          ]"
          >{{currency}}&nbsp;{{ book.listPrice.amount }}</label>
          <aside>{{age}}</aside>
        </div>
      </div>
    </article>
    <div v-if="displayStyle === 'list'" class="border-bottom"></div>
  </div>
</template>

<script>
import LongTxt from './LongTxt.vue'
import bookMixin from '@/mixins/bookMixin.js'
export default {
  mixins: [bookMixin],
  props: {
    book: Object,
    displayStyle: String,
  },
  components: {
    LongTxt,
  },
  computed: {
    displayClass() {
      return this.displayStyle === 'list' ? 'disp-list' : 'disp-grid col'
    },
    currency() {
      return this.getCurrency(this.book.listPrice.currencyCode)
    },
    age() {
      return this.defineAge(this.book.publishedDate)
    },
    readLength() {
      return this.getReadLength(this.book.pageCount)
    },
  },
  setup() {
    return {
      bookMixin,
    }
  },
}
</script>