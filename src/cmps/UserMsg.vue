<template>
  <aside class="user-msg flex a-center" :class="type">
    <img :src="imgSrc" />
    <p>{{msgStr}}</p>
    <button @click="hideUserMsg">X</button>
  </aside>
</template>

<script>
export default {
  props: {
    type: String,
    msgStr: String,
  },
  computed: {
    imgSrc() {
      return require(`@/assets/imgs/snackbar/${this.type}.svg`)
    },
  },
  methods: {
    hideUserMsg() {
      this.$store.dispatch({
        type: 'setUserMsg',
        userMsg: {
          type: null,
          txt: '',
        },
      })
    },
  },
}
</script>