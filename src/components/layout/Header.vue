<template lang="pug">
  header.header-wrapper.mb-5
    nav.navbar.bg-dark.rounded-3
      span.navbar-brand.text-white(href="#")
        img(src="@/assets/logo.png" width="30" class="d-inline-block align-top" alt="" loading="lazy")
        span.ms-2.logo-brand {{ projectName }}
</template>

<script>
export default {
  name: "Header",
  props: ["projectName"]
};
</script>

<style lang="sass">
.navbar
  box-shadow: none
  color: #fff
  padding: 10px 20px
</style>
