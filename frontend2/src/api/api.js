import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export const getZooDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/zoo/${id}/`);
        return response.data;

    } catch (error) {
        console.error('Error while fetching zoo details:', error);
        throw error;
    }
};

export const getZoos = async (filters) => {
    try {
        const response = await axios.get(`${BASE_URL}/zoo/`, {
          params: filters,
        });
        return response.data;
      } catch (error) {
        console.error('Error while fetching zoo details:', error);
        throw error;
      }
}

export default {
    getZooDetails,
    getZoos,
};
