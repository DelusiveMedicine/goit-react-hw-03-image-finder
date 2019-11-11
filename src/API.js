import axios from 'axios';

const KEY = '14105960-38572ae981a969c3d72b66ba4';

const fetchData = (query = '', page = 1) => {
  const API = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${KEY}`;
  return axios.get(API).then(res => {
    if (res.status === 200) return res;
    throw Error(`${res.status} ${res.statusText}`);
  });
};

export default fetchData;
