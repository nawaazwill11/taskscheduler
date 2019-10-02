const fs = require('fs');

var db_callback = function(error, data) {
	if (error) return false;
	return data;
}

async function main() {
	db_dat = await db(db_callback) 
	if (!db_dat){
		console.log('fuck it!');
		console.log(db_dat);
		return ;
	}
	console.log('Yeay bitch!');
	console.log(db_dat);
	
}
function db(callback) {
	return new Promise((resolve, reject) => {
		fs.readFile('./database/appdb.jso', function(error, data) {
			if (error) {
				reject(error)
			}
			else{
				resolve(data.toString());
			}
		})
	}).then(data => {
		console.log('here', data);
		if (data) {
			return callback(null, data);
		}
	}).catch(error =>  {
		return callback(error)
	});
}
main();
