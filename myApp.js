let express = require('express');
let app = express();

require('dotenv').config()

app.get('/', (req, res) => {
	absolutePath = __dirname + '/views/index.html';
	res.sendFile(absolutePath);
});

assetPath = __dirname + '/public';
app.use('/public', express.static(assetPath));

app.get('/json', (req, res) => {
	let message = "Hello json";

	if (process.env.MESSAGE_STYLE === "uppercase") {
		res.json({"message": message.toUpperCase()});
	} else {
		res.json({"message": message});
	}
});




























 module.exports = app;
