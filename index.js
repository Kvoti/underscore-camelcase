'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.strToUnderscore = strToUnderscore;
exports.strToCamelCase = strToCamelCase;
exports.objToCamelCase = objToCamelCase;
exports.objToUnderscore = objToUnderscore;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _objectWalk = require('object-walk');

var _objectWalk2 = _interopRequireDefault(_objectWalk);

function strToUnderscore(str) {
  return str.replace(/([A-Z])/, function (m, p1) {
    return '_' + p1.toLowerCase();
  });
}

function strToCamelCase(str) {
  return str.replace(/_([a-z])/, function (m, p1) {
    return p1.toUpperCase();
  });
}

function objToCamelCase(obj) {
  walk(obj, strToCamelCase);
}

function objToUnderscore(obj) {
  console.log('underscore', obj);
  walk(obj, strToUnderscore);
  console.log('underscore', obj);
}

function walk(obj, convert) {
  (0, _objectWalk2['default'])(obj, function down(val, prop, child) {
    var converted = convert(prop);
    if (converted !== prop) {
      child[converted] = child[prop];
      delete child[prop];
    }
  });
}
