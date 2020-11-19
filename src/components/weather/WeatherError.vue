<template>
  <div class="weather-error" v-if="typeof message != 'undefined'">
    <p class="err">Địa điểm không tồn lại</p>
  </div>
</template>

<script>
export default {
  name: "WeatherError",
  props: ["message"]
};
</script>

<style lang="sass"></style>
