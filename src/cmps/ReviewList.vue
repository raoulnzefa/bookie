<template>
  <section class="review-list">
    <review-preview v-for="review in reviews" :review="review" :key="review._id" />
  </section>
</template>


<script>
import ReviewPreview from './ReviewPreview.vue'
export default {
  props: ['reviews'],
  components: {
    ReviewPreview,
  },
}
</script>