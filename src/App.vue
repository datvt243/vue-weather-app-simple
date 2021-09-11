<template lang="pug">
  #app
    .wrapper
      .container.is-flex
        Header(:projectName="projectName")
        main.main-wrapper
          WeatherWrapper
        Footer
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WeatherWrapper from "./components/weather/WeatherWrapper.vue";

import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      projectName: "WeatherApp"
    };
  },
  components: {
    Header,
    Footer,
    WeatherWrapper
  },
  computed: {
    ...mapGetters(["getBgBody"])
  }
};
</script>

<style lang="sass">
$base-font: "Roboto", sans-serif
$base-heading: "Roboto Slab", serif

body
  font-family: $base-font
  background: linear-gradient(#2f96a3,#303e8f)
  background: #303e8f

h1, h2, h3, h4, h5, .heading
  font-family: $base-heading

section, div, li, dl, dt, dd, th, td, address, blockquote
  > *:last-child
    margin-bottom: 0

.container.is-flex
  display: flex
  flex-direction: column
  justify-content: space-between
  min-height: calc(100vh - 50px)

.main-wrapper
  flex-grow: 1
  position: relative
  padding-bottom: 4rem

#app
  padding: 50px 10px 0 10px
  > .wrapper
    width: 800px
    max-width: 100%
    margin:
      left: auto
      right: auto

.icon
  display: inline-block
  width: 7rem
  height: 7rem
  background: url('./assets/icon-clear.png') no-repeat center / cover
  &.clouds
    background-image: url('./assets/icon-clouds.png')
  &.rain
    background-image: url('./assets/icon-rain.png')
  &.drizzle
    background-image: url('./assets/icon-drizzle.png')
  &.thunderstorm
    background-image: url('./assets/icon-thunderstorm.png')
  &.snow
    background-image: url('./assets/icon-snow.png')
  &.clear
    background-image: url('./assets/icon-clear.png')

.animate-enter
  opacity: 0
  transform: translateY(-20px)

.animate-enter-active, .animate-leave-active
  transition: all .3s ease

.animate-leave-to
  opacity: 0
  transform: translateY(20px)
</style>
