"use strict"

const http = require('http');
const PHPUnserialize = require('php-unserialize');

http.createServer((req, res) => {

	const options = {
	  host: 'script2.pravoslavie.ru',
	  path: 'http://script2.pravoslavie.ru/cache_calendar_php/hrams=0&hram=0&encoding=u.ls'
	};

	let callback = response => {
	  let str = '';

	  response.on('data', chunk => {
	    str += chunk;
	  });

	  response.on('end', () => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		let unserializeData = JSON.stringify(PHPUnserialize.unserialize(str));
	    res.end(unserializeData);
	  });
	};

	http.request(options, callback).end();

}).listen(3333);
