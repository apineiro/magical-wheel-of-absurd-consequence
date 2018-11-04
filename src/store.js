import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    subject:'Subject',
    predicate:'Predicate',
    currentScreen:0,
    selectedPervasion:null,
    stageWidth: 800
  },
  mutations: {
    setSubject (state, val) {
      state.subject = val;
    },
    setPredicate (state, val) {
      state.predicate = val;
    },
    setCurrentScreen (state, val) {
      state.currentScreen = val;
    },
    setSelectedPervasion (state, val) {
      state.selectedPervasion = val;
    }
  },
  actions: {

  }
})
