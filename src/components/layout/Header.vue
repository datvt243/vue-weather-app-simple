<template>
  <header class="header-wrapper">
    <nav class="navbar navbar-light">
      <a class="navbar-brand" href="#">
        <img src="../../assets/logo.png" width="30" class="d-inline-block align-top" alt="" loading="lazy">
        <span class="eng logo-brand">{{ projectName }}</span>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['projectName']
}
</script>

<style lang="sass">

  .navbar 
    box-shadow: none
    color: #eee
    background-color: rgba(17, 167, 224, .5)

  .logo-brand
    font-weight: 700
    margin-left: .5rem

</style>