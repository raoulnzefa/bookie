<template>
  <div>
    <p class="d-inline">{{longTxt}}</p>
    <i
      class="arrow d-inblock muted pointer"
      :class="isLongTxtShown? '' : 'down'"
      @click="isLongTxtShown = !isLongTxtShown"
    ></i>
  </div>
</template>


<script>
export default {
  props: {
    txt: String,
  },
  data() {
    return {
      isLongTxtShown: false,
    }
  },
  computed: {
    longTxt() {
      let desc = ''

      if (this.isLongTxtShown) desc = this.txt
      else desc = this.txt.substring(0, 50) + '...'
      return desc
    },
  },
}
</script>