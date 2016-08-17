var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function(req, res)
{
	res.end('hello world');
});

app.listen(port);
