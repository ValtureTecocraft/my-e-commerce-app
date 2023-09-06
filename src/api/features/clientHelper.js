export const onRequest = (config) => {
  return config;
};

export const onRequestError = (error) => {
  return Promise.reject(error);
};

export const onResponse = (response) => {
  if (response.data.status === false) {
    return Promise.reject(response.data);
  }
  return response;
};

export const onResponseError = (error) => {
  return Promise.reject(error);
};
