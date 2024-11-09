import axios from 'axios';

export const FetcherSWR = async ({ url, options }) => {
  if (!url) {
    return;
  }

  const bearerToken = window.localStorage.getItem('token');

  const headers = {
    Authorization: `Bearer ${bearerToken}`,
  };

  const response = await axios({
    url,
    headers,
    method: options?.method || 'get',
    ...options,
  });

  return response.data;
};
