'use strict';

export default function nFormat(n, pattern, placeHolder = '*') {
  let patternArray = pattern.split('');
  let srcArray = n.toString().split('');
  let index = -1;
  return patternArray.map((p) => {
    if(p === placeHolder) {
      index++;
      return index < srcArray.length ? srcArray[index] : '';
    } else {
      return index < srcArray.length - 1 ? p : '';
    }
  }).join('');
}
