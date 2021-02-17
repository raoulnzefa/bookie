<template>
  <div id="app">
    <user-msg v-if="userMsg.txt" :type="userMsg.type" :msgStr="userMsg.txt" />
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/cmps/AppHeader'
import AppFooter from '@/cmps/AppFooter'
import userMsg from '@/cmps/UserMsg'
export default {
  components: {
    AppHeader,
    AppFooter,
    userMsg,
  },
  computed: {
    userMsg() {
      return this.$store.getters.userMsg
    },
  },
  async created() {
    await this.$store.dispatch({ type: 'loadBooks' })
  },
}
</script>