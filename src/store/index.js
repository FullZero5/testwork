import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forks: [],
    favorites: [],
    owner: '',
    repositoryName: '',
    page: 1,
    limit: 10,
    loaded: false
  },
  getters,
  mutations,
  actions
})
