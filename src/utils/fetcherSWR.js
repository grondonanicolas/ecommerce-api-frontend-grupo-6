import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const FetcherSWR = async ({ url, options }) => {
  if (!url) {
    return;
  }

  const bearerToken = window.localStorage.getItem('token');

  const headers = {
    Authorization: `Bearer ${bearerToken}`,
    'Content-Type': 'application/json',
  };

  const response = await axios({
    url: `${API_URL}/${url}`,
    headers,
    method: options?.method || 'get',
    data: options?.data || {},
    ...options,
  });

  return response.data;
};

export default FetcherSWR;
