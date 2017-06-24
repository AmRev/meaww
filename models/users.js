var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password: 'random',
	database: 'meaww',
	dateStrings: true
});

connection.connect();

var Users = module.exports = {
	getUsers: function(callback) {
		connection.query("SELECT * FROM users", callback);
	},
	getUserById: function(id, callback) {
		connection.query('SELECT * FROM users WHERE id=?', [id], callback);
	},
	addUser: function(user, callback) {
		connection.query('INSERT INTO users (name, age, birth, image) VALUES (?, ?, ?, ?)', [user.name, user.age, user.birth, user.image]
			, callback);
	},
	deleteUser: function(id, callback) {
		connection.query('DELETE FROM users WHERE id=?', [id], callback);
	},
	updateUser: function(id, user, callback) {
		connection.query('UPDATE users SET name=?, age=?, birth=?, image=? WHERE id=?', 
			[user.name, user.age, user.birth, user.image, id], callback);
	}
};