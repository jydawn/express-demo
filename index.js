var express = require('express');
var bodyParser = require('body-parser');

var app = express();


// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
// extended
// - true: use https://www.npmjs.com/package/qs
// - false: use https://www.npmjs.com/package/querystring
app.use(bodyParser.urlencoded({ extended: true }));

var users = [];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/user', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  users.push({
  	name: name,
  	email: email
  });
  res.sendStatus(201);
});

app.get('/users', function(req, res) {
  res.send(users);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});