import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 8EuKiPpGLIg_P2lu9mw6U8QcLjOgVbD5nqFcpsI9oCQ',
    },
    params: {
      query: term,
    },
  });

  console.log(response);

  return response.data.results;
};

export default searchImages;
