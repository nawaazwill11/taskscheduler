const fs = require('fs');
// const bl = require('bl');
const url = './database/appdb.json';
// const file = fs.createReadStream(url)

function readDB(callback) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', function (error, data) {
            if (error) {
                callback(false);
                reject(error);
            }
            else {
                resolve(data);
            }
        });
    })
    .then(data => callback(null, data))
    .catch(error => {
        callback(false);
        throw new Error(error)
    });
}
 
module.exports = readDB;