<template lang="pug">
  .weather-wrapper.bg-dark.p-3.p-md-5.text-white.rounded-3
    .mb-5
      WeatherForm(@emitFetchWeather="fetchWeather")
    transition(name="animate")
      .clearfix(v-if="(typeof getResult.main != 'undefined')")
        .mb-4
          WeatherDate
        .weather-result.text-center
          .mb-4
            .d-inline-block.border.rounded-3.px-3.py-2.px-md-5.py-md-3
              .weather-location
                span.h2 {{ getResult.name }}, {{ getResult.sys.country }}
              .weather-box
                .temp.display-1 {{ Math.round(getResult.main.temp) }}°C
          .weather
            .d-block.d-sm-flex.justify-content-center.align-items-center
              div
                i.icon(:class="getIcon")
              .ms-2 
                span.h2 {{ getResult.weather[0].description }}
      .clearfix(v-else)
        WeatherError(:message="getResult.message")
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import WeatherForm from "./WeatherForm";
import WeatherError from "./WeatherError";
import WeatherDate from "./WeatherDate";

export default {
  name: "WeatherWrapper",
  components: {
    WeatherForm,
    WeatherError,
    WeatherDate
  },
  data() {
    return {};
  },
  created() {
    let long;
    let lat;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        this.$store.dispatch("getData", { lat, long });
      });
    }
  },
  computed: {
    ...mapGetters([
      "getURL",
      "getQuery",
      "getKeyAPI",
      "getBgBody",
      "getIcon",
      "getResult"
    ])
  },
  methods: {
    ...mapMutations(["setBgBody", "setIcon"]),
    fetchWeather() {
      if (this.getQuery.trim() != "") {
        this.$store.dispatch("getData", {});
      }
    },
    resetWeather() {
      if (!this.getQuery.trim().length) {
        this.result = {};
      }
    }
  }
};
</script>

<style lang="sass"></style>
