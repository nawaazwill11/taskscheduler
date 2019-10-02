'use strict';

const db = require('./dbhandler'); // File containing database logic.
const route = require('./route'); // File containing route logic.
const server = require('http').createServer(); // Creates a server. 

const dbCallback = function(error, data) {
    if (error) return false;
    return data;
};

async function init() {
    // Check is database is readable.
    var db_data = await db(dbCallback);
    if (!db_data) {
        return console.error('Error occurred with database.')
    }
    // Callback for connection requests on server
    server.on('request', function (request, response) {
        route(request, response, db_data);
    });

    server.listen(8000); // Opens server for connection.
}

init();