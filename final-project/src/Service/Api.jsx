import axios from 'axios';

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`https://openlibrary.org/works/${id}.json`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book ${id}:`, error);
    return null;
  }
};
