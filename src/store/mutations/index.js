const mutations = {
    SET_PAGE: (state, page) => {
      state.page = page
    },
    PAGE_CHANGE: (state, logic) => {
      logic ? state.page++ : state.page--
    },
    SET_FORKS: (state, forks) => {
      state.forks = forks
    },
    SET_DATA(state, data) {
      const datas = data.split('/')
      state.owner = datas[0] || ''
      state.repositoryName = datas[1] || ''
    },
    SET_LOADED(state) {
      state.loaded = !state.loaded
    },
    SET_FAVORITES(state, objectItem) {
      state.favorites.push(objectItem)
    },
    SYNCHRONIZE_FAVORITES(state, arrayData) {
      state.favorites = arrayData
    },
    DEL_FAVORITES(state, id){
      state.favorites = state.favorites.filter(item => item.id !== id);
    }
  }

  export default mutations
