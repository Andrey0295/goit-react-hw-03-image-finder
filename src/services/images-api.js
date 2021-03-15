import axios from 'axios';

const API_KEY = '19312346-1618d264863fa21be7207d71c';

const fetchImages = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchImages };
