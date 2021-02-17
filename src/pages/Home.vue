<template>
  <section class="home">
    <div class="hero"></div>
    <article class="main-layout">
      <book-app />
    </article>
  </section>
</template>


<script>
import BookApp from "@/cmps/BookApp.vue";
export default {
  components: {
    BookApp,
  },
};
</script>
