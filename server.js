var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function(req, res)
{	
	var path = req.path;
	res.end(req.route);
});

app.listen(port);
