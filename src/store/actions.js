import { fetchNewsList, fetchJobsList, fetchAskList, fecthUserInfo, fetchItemInfo } from '../api/index.js'

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        console.log(response.data);
        context.commit('SET_NEWS', response.data); // SET_NEWS에 데이터 전달
        // state.news = response. data // actions는 state에 바로 접근할 수 없기 때문에 오류 발생
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
      })  
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_ASK({ commit }) {
    fetchAskList() 
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_USER({ commit }, name) {
    fecthUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_ITEM({ commit }, id) {
    fetchItemInfo(id) 
       .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(error => {
        console.log(error);
      })
  }
} 