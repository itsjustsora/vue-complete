import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
async function fetchNewsList() {
  // return axios.get(config.baseUrl + '/news/1.json');
  try { 
    return await axios.get(`${config.baseUrl}news/1.json`);
  } catch (error) {
    console.log(error); 
  }
}

async function fetchAskList() {
  try {
    const response = await axios.get(`${config.baseUrl}ask/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

async function fetchList(pageName) {
  try {
    return await axios.get(`${config.baseUrl}${pageName}/1.json`)
  } catch (error) {
    console.log(error);
  }
}

async function fecthUserInfo(username) {
  try {
    return await axios.get(`${config.baseUrl}user/${username}.json`)
  } catch (error) {
    console.log(error);
  }
}

async function fetchItemInfo(userid) {
  try {
    return await axios.get(`${config.baseUrl}item/${userid}.json`)
  } catch (error) {
    console.log(error);
  }
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fecthUserInfo,
  fetchItemInfo,
  fetchList,
}