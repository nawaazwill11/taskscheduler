'use strict';

const fs = require('fs'); // For accessing file-system.
const Router = require('router'); // For routing the request.
const final_handler = require('finalhandler'); // For handling errors.
var router = new Router();
var db = '';

/* HTML imports */
// Handles AJAX requests and responses.
router.get('/js/request.js', function(request, response){
    response.writeHead(200, {'Content-Type': 'text/js'});
    fs.createReadStream('./js/request.js').pipe(response);
});
// Imports jQuery.
router.get('/js/jquery-3.4.1.min.js', function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/js'});
    fs.createReadStream('./js/jquery-3.4.1.min.js').pipe(response);
});
// Imports CSS.
router.get('/css/index.css', function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/css'});
    fs.createReadStream('./css/index.css').pipe(response);
});
/*********************/

/* App routes */
// Home
router.get('/', function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('./index.html').pipe(response);
});
// Home - get json data
router.post('/', function (request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    fs.createReadStream('./database/appdb.json').pipe(response);
});

function route(request, response, db_data) {
    db = db_data;
    router(request, response, final_handler(request, response));
}

module.exports = route;