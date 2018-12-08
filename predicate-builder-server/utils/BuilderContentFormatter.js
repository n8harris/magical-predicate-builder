import { BUILDER_CONTENT_TYPES } from '../shared/constants';

const BuilderContentFormatter = (content, collectionName) => {
  switch(collectionName) {
    case BUILDER_CONTENT_TYPES.PREDICATES:
      return content.map((item) => { return { title: item.title, type: item.type } });
    case BUILDER_CONTENT_TYPES.OPERATORS:
      return content.reduce((operatorContent, item) => {
        if (!operatorContent[item.type]) {
          operatorContent[item.type] = [];
        }
        operatorContent[item.type].push({
          title: item.title,
          validPattern: item.valid_pattern,
          multiValue: item.multi_value || false,
        });
        return operatorContent;
      }, {});
    default:
      return null;
  }
};

export default BuilderContentFormatter;