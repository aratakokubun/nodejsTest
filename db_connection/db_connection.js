var mysql = require('mysql');

var connection = mysql.createConnection({
		host	 : 'mysql2',
		user	 : 'kbskpljqolzkfqht'
		password : 'nubblicuivockfjd'
		database : 'kbskpljqolzkfqht'
});

// write SQL
var sql = 'SELECT * FROM account;';

// try connection
connection.connect();

// publish query
var query = connection.query(sql);

// process for event
query
// on error
.on('error', function(err) {
		console.log('err is: ', err);
})

// on result
.on('result', function(err) {
		console.log(The res is: ', rows );
})

// on finish
.on('end', function(err) {
		console.log('end');
		connection.destroy(); // finished
});
