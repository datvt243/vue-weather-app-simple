<template>
  <div class="weather-date">
    <span class="heading" v-html="getDate"></span>
  </div>
</template>

<script>
export default {
  name: "WeatherDate",
  computed: {
    getDate() {
      let d = new Date();
      let months = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
      ];
      let days = [
        "Chủ Nhật",
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7"
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day}, <br class="d-block d-sm-none" /> ${date} Tháng ${month} Năm ${year}`;
    }
  }
};
</script>

<style lang="sass"></style>
