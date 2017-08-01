const express = require('express');
const hbs = require('hbs');

var app = express();


app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
	// res.send("hello express!");
	res.send({
		name: "Nitish",
		likes: [
			'Biking',
			'Cities'
		]
	})
});

app.get('/about', (req,res) => {
	res.render('about.hbs',{
		pageTitle: 'About Page',
		currentYear: new Date().getFullYear()
	});
});


app.listen(3000);