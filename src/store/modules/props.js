export default {
  state: {
    setScrollDistance: 0
  },
  mutations: {
    scrollBar(state, payload) {
      state.setScrollDistance = payload
    }
  },
  actions: {},
  getters: {
    getScrollDistance(state) {
      return state.setScrollDistance
    }
  }
}
