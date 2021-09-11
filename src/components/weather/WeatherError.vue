<template lang="pug">
  .weather-error
    .alert.alert-danger(role='alert')
      .text-center.p-5
        p.h2 Địa điểm không tồn lại
</template>

<script>
export default {
  name: "WeatherError",
  props: {
    message: {
      type: String,
      default: ""
    }
  },
  computed: {
    booleanMessage() {
      return typeof message != "undefined";
    }
  }
};
</script>

<style lang="sass"></style>
