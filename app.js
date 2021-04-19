const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'db_localolx'
});


connection.connect( (err)=>{
	if(err) throw err;
	console.log('Connected');
});

connection.query('SELECT * FROM location', (err, rows) =>{
	if(err) throw err;

	console.log(rows);
});

//mysql is accessible from this node wrapper

