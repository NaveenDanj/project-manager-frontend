import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    currentWorkspace : null,
  },

  mutations: {

    setCurrentUser(state, user) {
      state.currentUser = user;
    },

    setCurrentWorkspace(state, workspace) {
      state.currentWorkspace = workspace;
    }

  },

  actions: {},
  modules: {},
});
