<template>
  <section v-if="book" class="book-details main-layout m-page">
    <label class="title d-block">{{book.title}}</label>
    <div class="flex">
      <img :src="book.thumbnail" />
      <div class="info-container flex col">
        <h3>About This Book</h3>
        <small>Authors:</small>
        <ul class="authors" v-for="author in book.authors" :author="author" :key="author">
          <li>{{author}}</li>
        </ul>
        <small class="muted">Published: {{book.publishedDate}}</small>
        <p class="description">{{book.description}}</p>
        <div class="categories-container grow">
          <ul
            class="categories clean-list clr1 pointer"
            v-for="category in book.categories"
            :category="category"
            :key="category"
          >
            <li @click="$router.push({ path: '/', query: { search: category } })">#{{category}}</li>
          </ul>
        </div>
        <div class="price-container flex j-between">
          <strong>
            {{currency}}&nbsp;{{
            book.listPrice.amount
            }}
          </strong>
          <small class="muted">{{readLength}}</small>
          <label :style="{visibility: age ? 'visible' : 'hidden'}">- {{age}}</label>
        </div>
        <button class="my-btn btn-back" @click="$router.push('/')">Back</button>
      </div>
    </div>
    <div class="review-top-container flex a-center">
      <h3>Reviews</h3>
      <button class="btn-add-review" @click="$refs.reviewAddModal.showModal()">+</button>
      <review-add-modal ref="reviewAddModal" @onPostReview="postReview" />
    </div>
    <review-list :reviews="book.reviews" />
    <p v-if="!book.reviews || !book.reviews.length" class="no-reviews-yet muted">No reviews yet...</p>
  </section>
</template>

<script>
import ReviewList from '@/cmps/ReviewList.vue'
import ReviewAddModal from '@/cmps/ReviewAddModal.vue'
import bookService from '@/services/bookService.js'
import utilService from '@/services/utilService.js'
export default {
  components: {
    ReviewList,
    ReviewAddModal,
  },
  computed: {
    book() {
      return this.$store.getters.selectedBook
    },
    currency() {
      return bookService.getCurrency(this.book.listPrice.currencyCode)
    },
    age() {
      return bookService.defineAge(this.book.publishedDate)
    },
    readLength() {
      return bookService.getReadLength(this.book.pageCount)
    },
  },
  methods: {
    async getBook() {
      await this.$store.dispatch({
        type: 'getBookById',
        bookId: this.$route.params.id,
      })
    },
    async postReview(reviewToPost) {
      let bookToSave = JSON.parse(JSON.stringify(this.book))
      reviewToPost._id = utilService.getRandomId()
      reviewToPost.createdAt = Date.now()
      reviewToPost.by = this.$store.getters.loggedInUser._id

      bookToSave.reviews.unshift(reviewToPost)
      await this.$store.commit({ type: 'postReview', reviewToPost })
      try {
        await this.$store.dispatch({ type: 'saveBook', book: bookToSave })
        this.$store.dispatch({
          type: 'setUserMsg',
          userMsg: {
            type: 'success',
            txt: 'Review Posted',
          },
        })
      } catch (err) {
        this.$store.dispatch({
          type: 'setUserMsg',
          userMsg: {
            type: 'failure',
            txt: 'Please try again',
          },
        })
      }
    },
  },
  created() {
    this.getBook()
  },
}
</script>