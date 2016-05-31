export let decode = function(str) {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
};

export let encode = function(str) {
  var buf = [];
  for (var i=str.length-1;i>=0;i--) {
    buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
  }
  return buf.join('');
};

export let objectDecode = function(obj) {
	var newObject = {};
	for (let key in obj) {
		if(!obj.hasOwnProperty(key)) continue;
		if (obj[key] !== undefined) {
			newObject[key] = decode(obj[key]);
		}
	}
	return newObject;
};
