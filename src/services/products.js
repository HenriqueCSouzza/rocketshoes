import api from './api';

export const getProducts = () => {
  return api
    .get(`products`)
    .then(response => {
      return response;
    })
    .catch(response => {
      return JSON.parse(JSON.stringify(response));
    });
};
