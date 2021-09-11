export default {
  updateQuery(state, value) {
    state.query = value;
  },
  setBgBody(state, bg) {
    state.bgbody = bg;
  },
  setIcon(state, icon) {
    state.icon = icon;
  },
  setResult(state, value) {
    state.result = value;
  },
  setBackground(state, value) {
    state.bgbody = value;
    state.icon = value;
  }
};
