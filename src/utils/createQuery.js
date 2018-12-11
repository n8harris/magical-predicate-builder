import constants from '../shared/constants';

const createQuery = (filters) => {
  return fetch(constants.BUILD_QUERY_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ filters })
  }).then((response) => {
    return response.json()
  });
};

export default createQuery;
