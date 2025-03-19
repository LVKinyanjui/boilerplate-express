let express = require('express');
let app = express();
let bodyParser = require('body-parser');

require('dotenv').config()

app.get('/', (req, res) => {
	absolutePath = __dirname + '/views/index.html';
	res.sendFile(absolutePath);
});

// assetPath = __dirname + '/public';
// app.use('/public', express.static(assetPath));

app.get('/json', (req, res) => {
	let message = "Hello json";

	if (process.env.MESSAGE_STYLE === "uppercase") {
		res.json({"message": message.toUpperCase()});
	} else {
		res.json({"message": message});
	}
});

app.use('/', (req, res, next) => {
	// console.log("%s %s - %s", req.method, req.path, req.ip);
	var logVal = req.method + " " + req.path + " - " + req.ip;
	console.log(logVal);
	next();
});

app.get('/now', (req, res, next) => {
	req.time = new Date().toString();
	console.log(req.time);
	next();
}, (req, res) => {
	res.json({time: req.time})
});

app.get('/:word/echo', (req, res) => {
	console.log(req.params.word);
	res.json({echo: req.params.word})
});


// When extended=false it uses the classic encoding querystring library. 
// When extended=true it uses qs library for parsing.
app.use(bodyParser.urlencoded({extended: false}));


app.route('/name').get((req, res) => {
	let first = req.query.first;
	let last = req.query.last;
	// console.log(req.query);
	res.json({name: `${first} ${last}`});
}).post((req, res) => {
	let first = req.body.first;
	let last = req.body.last;
	// console.log(req.query);
	res.json({name: `${first} ${last}`});
});



























 module.exports = app;
