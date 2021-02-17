<template>
  <header class="app-header" :class="onTop ? 'on-top' : ''">
    <section class="main-layout flex j-between a-center">
      <router-link to="/">
        <div class="logo-container flex a-center pointer">
          <div class="logo"></div>
          <p>Bookie</p>
        </div>
      </router-link>
      <nav>
        <ul class="clean-list">
          <router-link to="/about">About</router-link>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  data() {
    return {
      onTop: false,
    }
  },
  created() {
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.onTop =
        window.scrollY <= 50 && this.$route.name === 'Home' ? true : false
    },
  },
  watch: {
    $route() {
      this.onScroll()
    },
  },
}
</script>