<template lang="pug">
  footer.footer-wrapper
    .clearfix.text-white
      small.text-center(v-html="footer")
</template>

<script>
export default {
  data() {
    return {
      footer: "Make by me &copy; 2021"
    };
  }
};
</script>

<style scoped lang="sass">
.footer-wrapper
  border-top: 1px solid rgba(255,255,255,.1)
  padding: 10px 0
  text-align: center
  small
    opacity: .6
</style>
