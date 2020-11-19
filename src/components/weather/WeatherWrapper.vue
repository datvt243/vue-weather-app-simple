<template>
  <div class="weather-wrapper">
    <WeatherForm @emitFetchWeather="fetchWeather" />
    <transition name="animate">
      <div class="clearfix" v-if="typeof result.main != 'undefined'">
        <WeatherDate />
        <div class="weather-result">
          <div class="weather-location">
            <span class="heading">
              {{ result.name }}, {{ result.sys.country }}
            </span>
          </div>
          <div class="weather-box">
            <div class="temp">{{ Math.round(result.main.temp) }}°C</div>
            <br />
            <div class="weather">
              <div
                class="d-block d-sm-flex justify-content-center align-items-center"
              >
                <div>
                  <i class="icon" :class="$store.state.icon"></i>
                </div>
                <div class="ml-2">
                  {{ result.weather[0].description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="animate" tag="div">
      <WeatherError :message="result.message" />
    </transition>
  </div>
</template>

<script>
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
    return {
      result: {}
    };
  },
  created() {
    let long;
    let lat;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        fetch(`
          ${this.$store.state.url}/weather?q=${this.$store.state.query}&lat=${lat}&lon=${long}&units=metric&lang=vi&appid=${this.$store.state.key_api}
        `)
          .then(respon => {
            return respon.json();
          })
          .then(data => {
            this.result = data;
            if (typeof this.result.main != "undefined") {
              this.setBackground();
            }
          });
      });
    }
  },
  methods: {
    fetchWeather() {
      if (this.$store.state.query.trim() != "") {
        fetch(`
          ${this.$store.state.url}/weather?q=${this.$store.state.query}&units=metric&lang=vi&appid=${this.$store.state.key_api}
        `)
          .then(respon => {
            return respon.json();
          })
          .then(data => {
            this.result = data;
            if (typeof this.result.main != "undefined") {
              this.setBackground();
            }
          });
      }
    },
    resetWeather() {
      if (!this.$store.state.query.trim().length) {
        this.result = {};
      }
    },
    setState() {},
    setBackground() {
      let bg = this.result.weather[0].main;
      switch (bg.toLowerCase()) {
        case "clouds":
          this.$store.state.bgbody = "clouds";
          this.$store.state.icon = "clouds";
          break;
        case "rain":
          this.$store.state.bgbody = "rain";
          this.$store.state.icon = "rain";
          break;
        case "drizzle":
          this.$store.state.bgbody = "drizzle";
          this.$store.state.icon = "drizzle";
          break;
        case "thunderstorm":
          this.$store.state.bgbody = "thunderstorm";
          this.$store.state.icon = "thunderstorm";
          break;
        case "snow":
          this.$store.state.bgbody = "snow";
          this.$store.state.icon = "snow";
          break;
        case "clear":
          this.$store.state.bgbody = "clear";
          this.$store.state.icon = "clear";
          break;
        default:
          this.$store.state.bgbody = "clear";
          this.$store.state.icon = "clear";
          break;
      }
    }
  }
};
</script>

<style lang="sass">

.weather

  &-wrapper
    width: 800px
    max-width: 100%
    padding: 1.5rem
    margin:
      left: auto
      right: auto
    background:
      color: rgba(255,255,255,.5)

  &-date
    font-size: 2rem
    text-align: center

  &-result
    text-align: center
    margin-top: 1rem

  &-location
    margin-bottom: 1rem
    font-size: 3rem

  &-box
    .temp
      display: inline-block
      background-color: rgba(255,255,255,.5)
      padding: 1rem 5rem
      font-size: 5rem
      line-height: 1
      white-space: nowrap
      margin:
        left: auto
        right: auto
        bottom: 2rem
      border-radius: .5rem
    .weather
      font-size: 1.8rem
      margin-bottom: 1rem

  &-error
    text-align: center
    font-size: 2rem
    margin:
      top: 1rem
      bottom: 3rem
    .err
      padding: 1rem 0 2rem

  @media (max-width: 480px)

    &-box
      .temp
        font-size: 3rem
        padding: 1rem
        width: 90%
    &-date
      font-size: 1.4rem
    &-location
      font-size: 2rem
</style>
