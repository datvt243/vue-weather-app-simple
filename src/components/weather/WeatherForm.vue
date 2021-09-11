<template lang="pug">
  .weather-form
    .input-group
      span.input-group-text
        img(src="@/assets/location.png" width="20" class="d-inline-block align-top" alt="location")
      input.form-control(
        class="form-control form-control-lg text-capitalize"
        type="text"
        placeholder="Nhập địa điểm ..."
        v-model="getQueryy"
        @keydown.enter="emitFetchWeather"
      )
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "WeatherForm",
  computed: {
    ...mapGetters(["getQuery"]),
    getQueryy: {
      get() {
        return this.getQuery;
      },
      set(value) {
        this.$store.commit("updateQuery", value);
      }
    }
  },
  methods: {
    emitFetchWeather() {
      this.$emit("emitFetchWeather");
    }
  }
};
</script>

<style lang="sass"></style>
