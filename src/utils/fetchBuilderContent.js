import constants from '../shared/constants';

const fetchBuilderContent = () => {
  return fetch(constants.BUILD_CONTENT_ENDPOINT).then((content) => content.json());
};

export default fetchBuilderContent;