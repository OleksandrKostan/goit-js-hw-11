import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

export default class ImageFetchApi {
  constructor() {
    this.searchQuery = '';

    this.page = 1;
  }
  async getImage() {
    const searchParams = new URLSearchParams({
      key: '30471998-a8edceaaf22ac8084f766fdc6',
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      page: this.page,
    });
    const { data } = await axios.get(`/?${searchParams}`);

    return data;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newSearchQuery) {
    this.searchQuery = newSearchQuery;
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
