var express = require('express');

var app = express();

app.get('/home', function(req, res)
{
	res.end('hello world');
});

app.listen(8080);
