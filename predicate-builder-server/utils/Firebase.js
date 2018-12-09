"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _firebase = require("firebase");

var firebase = _interopRequireWildcard(_firebase);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Firebase = function () {
  function Firebase(fb, url, projectId) {
    _classCallCheck(this, Firebase);

    this.dbUrl = url || "magical-predicate-builder.firebaseapp.com";
    this.projectId = projectId || "magical-predicate-builder";
    this.fb = fb || !firebase.apps.length && firebase.initializeApp({
      databaseURL: this.dbUrl,
      projectId: this.projectId
    }).firestore();
  }

  _createClass(Firebase, [{
    key: "getCollections",
    value: function getCollections(collections) {
      var _this = this;

      var promises = [];
      collections.forEach(function (collection) {
        promises.push(_this.getCollection(collection));
      });
      return Promise.all(promises);
    }
  }, {
    key: "getCollection",
    value: function getCollection(collectionName) {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.fb.collection(collectionName).get().then(function (result) {
          var items = [];
          result.forEach(function (item) {
            return items.push(item.data());
          });
          resolve(items);
        });
      });
    }
  }, {
    key: "getPredicates",
    value: function getPredicates() {
      return this.getCollection('predicates');
    }
  }, {
    key: "getOperators",
    value: function getOperators() {
      return this.getCollection('operators');
    }
  }]);

  return Firebase;
}();

exports.default = Firebase;