import api from './api';

export const getAmout = () => {
  return api
    .get(`amout`)
    .then(response => {
      return response;
    })
    .catch(response => {
      return JSON.parse(JSON.stringify(response));
    });
};
