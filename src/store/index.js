import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    key_api: '6801ae848371a19c0a769a98525a9dfb',
    url: 'https://api.openweathermap.org/data/2.5/',
    query: '',
    bgbody: 'default',
    icon: 'clear'
  },
  mutations: {
    updateQuery(state, value) {
      state.query = value
    }
  },
  actions: {},
  module: {}
})