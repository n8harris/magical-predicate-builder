'use strict';

import Firebase from './utils/Firebase';
import { BUILDER_CONTENT_TYPES } from './shared/constants';
import BuilderContentFormatter from './utils/BuilderContentFormatter';

module.exports.getBuilderContent = async (event, context, callback) => {
  const collections = [ BUILDER_CONTENT_TYPES.PREDICATES, BUILDER_CONTENT_TYPES.OPERATORS];
  Firebase.getCollections(collections).then((values) => {
    let content = {};
    values.forEach((collection, index) => {
      content[collections[index]] = BuilderContentFormatter(collection, collections[index]);
    })
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: content,
        input: event,
      }),
    });
  }).catch(() => {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        message: "Sorry! The unicorns are out to play and can't create the app right now",
        input: event,
      }),
    });
  });
};
