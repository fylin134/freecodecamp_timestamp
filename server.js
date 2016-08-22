var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/:datestring', function(req, res)
{	
	var datestring = "";
	datestring += req.params.datestring;
	var unixStamp = Date.parse(datestring);
	res.end(unixStamp);
});

app.listen(port);
