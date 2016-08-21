var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/:datestring', function(req, res)
{	
	var date = req.params.datestring;
	res.end(date);
});

app.listen(port);
