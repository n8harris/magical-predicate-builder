import { BUILDER_CONTENT_TYPES } from '../shared/constants';
import BuilderContentFormatter from './BuilderContentFormatter';
import Firebase from './Firebase';

const getContent = () => {
  var collections = [BUILDER_CONTENT_TYPES.PREDICATES, BUILDER_CONTENT_TYPES.OPERATORS];
  return Firebase.getCollections(collections).then(function (values) {
    var content = {};
    values.forEach(function (collection, index) {
      content[collections[index]] = BuilderContentFormatter(collection, collections[index]);
    });
    return content;
  });
};

export default getContent;