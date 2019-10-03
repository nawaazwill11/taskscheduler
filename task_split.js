let t1 = {
	id: 't1',
	name: 'Show repair',
	time: '20000',
	subtask: []
};

let t2 = {
	id: 't1-t1',
	name: 'Mend sole',
	time: '10000',
	subtask: []
};

let t3 = {
	id: 't1-t2',
	name: 'Buy lace',
	time: '10000',
	subtask: []
};

let t4 = {
	id: 't1-t1-t1',
	name: 'Shoe polish',
	time: '10000',
	subtask: []
};

let task_list = [t1, t2, t3, t4]; //, t2, t3, t4]

let total_task = [
{
	id: 't1',
	name: 'Mend watch',
	time: '20000',
	subtask: [
		{
			id: 't1-t1',
			name: 'some task',
			time: '10000',
			subtask: []
		}
	]
}
//{
//	id: 't2',
//	name: 'Bag repair',
//	time: '30000'
//}
];

task_list.forEach(task => {
	let sequence = task.id.split('-');
	var obj = {}
	let id = '';
	let index;
	let temp_tt = total_task
	
	while (sequence.length > 0) {
		id += sequence.shift();
		console.log(id, sequence.length);
		for (let i = 0; i < temp_tt.length; i++) {
			if (temp_tt[i].id == id) {
				
				index = i;
				break;
			}
		}
		console.log('index', index);
		if (sequence.length == 0) {
			if (index == undefined) {

				temp_tt.push(task);
			}
			else{
				console.log(task);
				temp_tt[index] = task;
			}
		}
		else {
			if (index === undefined) {
				throw new Error ('Bad task-id');
			}
			else {
	//			console.log('index', index);
				let subtask = temp_tt[index].subtask;
				temp_tt = subtask;
			}			
			id += '-';
		}
		index = undefined;
	}
	
});


function someFunc(someValue) {
	return someValue;
}
server = require('http').createServer();
server.on('request', function (request, response) {
	response.writeHead(200, {'content-type': 'application/json'})
	response.write(JSON.stringify(total_task));
	response.end();
});
server.listen(8000);

//let task_split_list = tasks.split('-');

//console.log(task_split_list);
