var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	next();
});
Users = require('./models/users.js');

app.get('/api/:id?', function(req, res) {
	if (req.params.id) {
		Users.getUserById(req.params.id, function(err, rows, fields) {
			if(err) {
				res.json(err);
			}
			res.json(rows);
		});
	} else {
		Users.getUsers(function(err, rows, fields) {
			if(err) {
				res.json(err);
			}
			res.json(rows);
		});
	}
});

app.post('/api', function(req, res) {
	Users.addUser(req.body, function(err, rows, fields) {
		if(err) {
			res.json(err);
		}
		res.json(rows);
	});
});

app.put('/api/:id', function(req, res) {
	Users.updateUser(req.params.id, req.body, function(err, rows, fields) {
		if(err) {
			res.json(err);
		}
		res.json(rows);
	});
});

app.delete('/api/:id', function(req, res) {
	Users.deleteUser(req.params.id, function(err, rows, fields) {
		if(err) {
			res.json(err);
		}
		res.json(rows);
	})
});

app.listen(8000);