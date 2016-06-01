'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var decode = exports.decode = function decode(str) {
  return str.replace(/&#(\d+);/g, function (match, dec) {
    return String.fromCharCode(dec);
  });
};

var encode = exports.encode = function encode(str) {
  var buf = [];
  for (var i = str.length - 1; i >= 0; i--) {
    buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
  }
  return buf.join('');
};

var objectDecode = exports.objectDecode = function objectDecode(obj) {
  var newObject = {};
  for (var key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    if (obj[key] !== undefined) {
      newObject[key] = decode(obj[key]);
    }
  }
  return newObject;
};