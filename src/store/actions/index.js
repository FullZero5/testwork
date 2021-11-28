import api from '../../api/service'

const actions = {
    GET_FORKS: async ({ commit, state }) => {
      commit('SET_LOADED')
      try {
         const data  = await api.getForks(state.owner, state.repositoryName)
         commit('SET_FORKS', data)
         commit('SET_LOADED')
      } catch (error) {
         console.error(error)         
         commit('SET_LOADED')
      }
    },
    GET_FAVORITES: ({ commit }) => {
      if(localStorage.getItem('favorites')) {
        try {
          commit('SYNCHRONIZE_FAVORITES', JSON.parse(localStorage.getItem('favorites')))
        } catch(e) {
          localStorage.removeItem('favorites');
          console.error('localstorage', e)
        }
      }
    },
    ADD_FAVORITES: ({ commit, state }, object) => {
      const index = state.favorites.findIndex(x => x.id === object.id);
      if(index === -1){
        commit('SET_FAVORITES', object)
        localStorage.setItem('favorites',  JSON.stringify(state.favorites))
        //dispatch('GET_FAVORITES')
      } else {
        commit('DEL_FAVORITES', object.id)
        localStorage.setItem('favorites',  JSON.stringify(state.favorites))
      }
    }
}

export default actions
