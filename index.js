'use strict';

function nFormat(n, pattern) {
  var patternArray = pattern.split('');
  var srcArray = n.toString().split('');
  var index = -1;
  return patternArray.map(function(p) {
    if(p === '*') {
      index++;
      return index < srcArray.length ? srcArray[index] : '';
    } else {
      return index < srcArray.length ? p : '';
    }
  }).join('');
}

module.exports = nFormat;
