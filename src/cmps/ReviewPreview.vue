<template>
  <div>
    <article class="review-preview">
      <small class="muted">{{new Date(review.createdAt).toLocaleDateString('it-IT')}}</small>
      <star-rating
        read-only
        :increment="0.5"
        :star-size="18"
        :rating="review.rating"
        text-class="rating-txt"
      />
      <p>{{review.txt}}</p>
    </article>
    <div class="border-bottom"></div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  components: {
    StarRating,
  },
  props: {
    review: Object,
  },
}
</script>