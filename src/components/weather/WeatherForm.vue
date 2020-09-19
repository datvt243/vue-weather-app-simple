<template>
  <div class="weather-form">
    <p class="desc">Nhập vào địa điểm và Enter</p>
    <div class="input-group">
      <input class="form-control form-control-lg" type="text" placeholder="nhập địa điểm... [Enter]" v-model="getQuery" @keydown.enter="emitFetchWeather" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherForm',
  computed: {
    getQuery: {
      get () {
        return this.$store.state.query;
      },
      set (value) {
        this.$store.commit('updateQuery', value)
      }
    }
  },
  methods: {
    emitFetchWeather() {
      this.$emit('emitFetchWeather')
    }
  }
}
</script>

<style lang="sass">

  .weather

    &-form
      margin-bottom: 3rem
      .desc
        line-height: 1.2
        font-style: italic
        margin-bottom: .5rem
        padding-left: .5rem
      .form-control
        border:
          width: .3rem
          radius: 0
          color: #007bff
        padding: 2rem
        box-shadow: .3rem .3rem 0 rgba(#6f42c1, .5)
        transition: all .3s ease
        font-size: 1.5rem
        text-transform: capitalize
        font-style: italic
        color: #333
        &:focus
          border-color: #17a2b8

</style>