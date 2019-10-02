const fs = require('fs');
const url = require('url');

function getFilename (req_url) {
	req_url = url.parse(req_url);
	if (req_url.pathname == '/') {
		return './index.html';
	}
	return '.' + req_url.pathname + '.html';
}

function main (request, response) {
	const req_url = url.parse(request.url);
	const filename = getFilename(req_url);
	const readStream = fs.createReadStream(filename);
	readStream
	.on('error', function(error) {
		response.writeHead(404, {'Content-Type': 'text/html'});
		fs.createReadStream('./404.html').pipe(response);
	})
	.once('data', function () {
		response.writeHead(200, {'Content-Type': 'text/html'});
	})
	.on('data', function (chunk) {
		response.write(chunk)
	})
	.on('end', function () {
		response.end();
	})
}
module.exports = main
