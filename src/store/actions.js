import { fetchNewsList, fetchJobsList, fetchAskList, fecthUserInfo, fetchItemInfo, fetchList } from '../api/index.js'

export default {
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },
  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList();
      commit('SET_JOBS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
    
  },
  async FETCH_ASK({ commit }) {
    const response = await fetchAskList();
    commit('SET_ASK', response.data);
    return response;
  },
  async FETCH_USER({ commit }, name) {
    const response = await fecthUserInfo(name)
    commit('SET_USER', response.data);
    return response;
  },
  async FETCH_ITEM({ commit }, id) {
    const response = await fetchItemInfo(id) 
    commit('SET_ITEM', response.data);
    return response;
  },
  // #2
  async FETCH_LIST({ commit }, pageName) {
    // #3
    const response = await fetchList(pageName)
    // #5
    commit('SET_LIST', response.data); 
    return response; 
  }
} 