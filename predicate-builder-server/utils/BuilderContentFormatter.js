'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../shared/constants');

var BuilderContentFormatter = function BuilderContentFormatter(content, collectionName) {
  switch (collectionName) {
    case _constants.BUILDER_CONTENT_TYPES.PREDICATES:
      return content.map(function (item) {
        return { title: item.title, type: item.type };
      });
    case _constants.BUILDER_CONTENT_TYPES.OPERATORS:
      return content.reduce(function (operatorContent, item) {
        if (!operatorContent[item.type]) {
          operatorContent[item.type] = [];
        }
        operatorContent[item.type].push({
          title: item.title,
          validPattern: item.valid_pattern,
          multiValue: item.multi_value || false
        });
        return operatorContent;
      }, {});
    default:
      return null;
  }
};

exports.default = BuilderContentFormatter;