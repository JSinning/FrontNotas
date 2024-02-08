import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: Number,
    usuario: String,
  },
  mutations: {
    ADD_Usuario(state, payload) {
      state.usuario = payload;
    },
    ADD_Id(state, payload) {
      state.id = payload;
    },
  },
  actions: {
    addUser(context, value) {
      context.commit('ADD_Usuario', value);
    },
    addId(context, value) {
      context.commit('ADD_Id', value);
    },
  },
  modules: {
  },
  getters: {
    getUsuario(state) {
      return state.usuario;
    },
    getID(state) {
      return state.id;
    },
  },
})
