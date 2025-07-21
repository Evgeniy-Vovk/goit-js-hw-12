import axios from 'axios';

export default async function getApi(keyWord) {
  const apiKey = '47396340-f7005e76dc1b3bde31bf703a9';
  const baseUrl = 'https://pixabay.com/api/';

  try {
    const response = await axios.get(baseUrl, {
      params: {
        key: apiKey,
        q: keyWord,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw new Error('Failed to fetch images. Please try again later.');
  }
}
