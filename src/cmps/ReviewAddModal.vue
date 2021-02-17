<template>
  <modal name="review-add-modal">
    <div class="review-add-modal flex col j-between">
      <div class="flex j-between a-center">
        <h3>Share your opinion</h3>
        <star-rating
          :star-size="22"
          :increment="0.5"
          :show-rating="false"
          :rating="5"
          @rating-selected="onSelectRating"
        />
      </div>
      <textarea v-model="review.txt" />
      <div class="btn-group flex">
        <button class="btn-back" @click="hideModal">Back</button>
        <button class="my-btn btn-post" @click="onPostReview">Post</button>
      </div>
    </div>
  </modal>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  components: {
    StarRating,
  },
  data() {
    return {
      review: {
        rating: 5,
        txt: '',
      },
    }
  },
  methods: {
    showModal() {
      this.$modal.show('review-add-modal')
    },
    hideModal() {
      this.$modal.hide('review-add-modal')
    },
    onSelectRating(rating) {
      this.review.rating = rating
    },
    onPostReview() {
      this.$emit('onPostReview', this.review)
      delete this.review
      this.hideModal()
    },
  },
}
</script>