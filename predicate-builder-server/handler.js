'use strict';

var _Firebase = require('./utils/Firebase');

var _Firebase2 = _interopRequireDefault(_Firebase);

var _constants = require('./shared/constants');

var _BuilderContentFormatter = require('./utils/BuilderContentFormatter');

var _BuilderContentFormatter2 = _interopRequireDefault(_BuilderContentFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.getBuilderContent = async function (event, context, callback) {
  var collections = [_constants.BUILDER_CONTENT_TYPES.PREDICATES, _constants.BUILDER_CONTENT_TYPES.OPERATORS];
  _Firebase2.default.getCollections(collections).then(function (values) {
    var content = {};
    values.forEach(function (collection, index) {
      content[collections[index]] = (0, _BuilderContentFormatter2.default)(collection, collections[index]);
    });
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: content,
        input: event
      })
    });
  }).catch(function () {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        message: "Sorry! The unicorns are out to play and can't create the app right now",
        input: event
      })
    });
  });
};