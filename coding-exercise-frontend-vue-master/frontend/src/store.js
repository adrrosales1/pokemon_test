import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: ''
  },
  getters: {
    areFavorite(state) {

    }
  },
  mutations: {
    DataPokemon(state, payload) {
    }
  },
  actions: {
    setPokemon( {commit}, pokemon ){
    },
  }
});
