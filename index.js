'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = nFormat;

function nFormat(n, pattern) {
  var placeHolder = arguments.length <= 2 || arguments[2] === undefined ? '*' : arguments[2];

  var patternArray = pattern.split('');
  var srcArray = n.toString().split('');
  var index = -1;
  return patternArray.map(function (p) {
    if (p === placeHolder) {
      index++;
      return index < srcArray.length ? srcArray[index] : '';
    } else {
      return index < srcArray.length - 1 ? p : '';
    }
  }).join('');
}

module.exports = exports['default'];
