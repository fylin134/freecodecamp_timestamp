var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function(req, res)
{
	var fileName = path.join(__dirname, 'index.html');
	res.sendFile(fileName, function(err)
	{
		if(err)
		{
			console.log(err);
			res.status(err.status).end();
		}
		else
		{
			console.log('Sent');
		}
	});
});

app.get('/:in_date', function(req, res)
{	
	var str_inDate = req.params.in_date;
	var unixStamp = Date.parse(str_inDate)/1000;
	if(/^\d+$/.test(str_inDate))
	{
		var date = new Date(parseInt(str_inDate, 10)*1000);
		var int_year = date.getFullYear();
		var str_month = getStringMonth(date.getMonth());
		var int_day = date.getDate();
		var str_date = "" + str_month + " " + int_day + ", " + int_year;

		res.json(
		{
			'unix': unixStamp,
			'natural': str_date
		});
	}
	else if(Number.isNaN(unixStamp))
	{
		res.json(
		{
			'unix': null,
			'natural': null
		});
	}	
	else
	{
		res.json(
		{
			'unix': unixStamp.toString(),
			'natural': str_inDate
		});
	}	
});

app.listen(port);

function getStringMonth(intMonth)
{
	switch(intMonth)
	{
		case 0:
			return "January";
		case 1:
			return "February";
		case 2:
			return "March";
		case 3:
			return "April";
		case 4:
			return "May";
		case 5:
			return "June";
		case 6:
			return "July";
		case 7:
			return "August";
		case 8:
			return "September";
		case 9:
			return "October";
		case 10:
			return "November";
		case 11:
			return "December";
	}
}