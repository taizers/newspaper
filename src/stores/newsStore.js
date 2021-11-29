import create from 'zustand'
import axios from 'axios'
import { apiUrls } from '../consts'

const useNewsStore = create((set, get) => ({
  loaded: false,
  news: [],
  getLastNews: () => get().news.slice(-3),
  fetchNews: () => {
    axios.get(apiUrls.posts).then(response => {
      set({ loaded: true, news: response.data })
    })
  }
}));

export default useNewsStore;
