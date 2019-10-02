'use strict';

const finalhandler = require('finalhandler');
const Router = require('router');
const fs = require('fs');
const bl = require('bl');
const server = require('http').createServer();

const router = new Router();
router.get('/', function (request, response) {
    fs.createReadStream('./index.html').pipe(bl(function (error, data){
        data = data.toString();
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    }));
});
router.post('/', function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var data = '';
    request.on('data', function(chunk){
        data += chunk;
        console.log(data);
    });
    request.on('end', function () {
        response.end(data);
    })
});
router.get('/js/jquery-3.4.1.min.js', function (request, response) {
    fs.createReadStream('./js/jquery-3.4.1.min.js').pipe(response);
});

server.on('request', function (request, response) {
    console.log(request.url);
    router(request, response, finalhandler(request, response));
});
server.listen(8000);