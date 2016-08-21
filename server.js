var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/:datestring', function(req, res)
{	
	Date date = new Date();
	var unixStamp = date.parse(req.params.datestring);
	res.end(unixStamp);
});

app.listen(port);
