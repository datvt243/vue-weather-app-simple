export default {
  getData({ commit, state }, { lat, long }) {
    let stringAPI = "";
    if (lat && long)
      stringAPI = `${state.url}/weather?q=${state.query}&lat=${lat}&lon=${long}&units=metric&lang=vi&appid=${state.key_api}`;
    else
      stringAPI = `${state.url}/weather?q=${state.query}&units=metric&lang=vi&appid=${state.key_api}`;
    fetch(stringAPI)
      .then(response => response.json())
      .then(data => {
        commit("setResult", data);
        if (typeof data.main != "undefined") {
          let bg = data.weather[0].main;
          commit("setBackground", bg.toLowerCase());
        }
      });
  }
};
