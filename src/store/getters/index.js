 const getters = {
    totalForks: state => {
      return state.forks.length
    },
    getPage: state => {
      return state.page
    },
    getLimits: state => {
      return state.limit
    },
    getForks: state => {
      return state.forks.slice((state.page - 1) * state.limit, state.page * state.limit)
    },
    getFavorites: state => {
      return state.favorites
    },
    isEmptyOwner: state => {
        return (state.owner === '' || state.owner === 'undefined') ? true : false
    },
    isEmptyRepositoryName: state => {
        return (state.repositoryName === '' || state.repositoryName === 'undefined') ? true : false
    },
    getLoaded: state => {
        return state.loaded
    },
    statusFavorites: state => id => {
        let status = state.favorites.findIndex(x => x.id === id)
        return status === -1 ? false : true
    }
}
export default getters
