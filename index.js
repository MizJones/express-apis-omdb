var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();

// this adds some logging to each request
app.use(require('morgan')('dev'));

app.get('/', function(req, res) {
    res.send('Hello Backend!');
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server;




/// begin the original

//require needed modules
var express = require('express');
var expressEjsLayouts = require('express-ejs-layouts');
var request = require('request');

// declare a new espress app has to be defined
var app = express();

// will need a second var for the IMDB search ID
var movieRequest = require('http:www.omdbapi.com?apikey=bef8d7dc&s=' + movieSearch);


// tell express what view engine we want to use
// the ejs 
app.set('view engine', 'ejs');

// define middleware
app.use(expressEjsLayouts);

// declare routes - or the path to get to whatever page they want to get
app.get('/', function(req, res) { // takes two parameters local so don[t need that, but the slash is definted here.
	request('http://www.omdbapi.com?apikey=bef8d7dc&s=star+wars', function(err, response, body) {
		if(!err && response.statusCode === 200) {
			console.log("trying to render body");
			var parsedJson = JSON.parse(body);
			res.render('home', { movies: parsedJson.Search });
			// res.send(body);
		}
		else {
			res.send(err);
		}

	});
	//res.send('home');				// second function is the callback when they get to the page
});


// for imdb info
app.get('/movies/:movie_id', function(req, res) { // takes two parameters local so don[t need that, but the slash is definted here.
	request('http://www.omdbapi.com?apikey=bef8d7dc&i=tt234323', function(err, response, body) {
		if(!err && response.statusCode === 200) { 
			console.log("trying to render IMDB requesttt234323 body");
			var parsedJson = JSON.parse(body);
			res.render('imdb', { /movies/:movie_id: parsedJson.Search });
			// res.send(body);
		}
		else {
			res.send(err);
		}

	});
	//res.send('home');				// second function is the callback when they get to the page
});


app.get('/about', function(req, res) {
	var name = 'me'; 
	var foods = ['anything but peanut butter and jelly', 'anything but crackers'];
	res.render('about', { myname: name, myfoods: foods});
});


//listen on port 3000
app.listen(3000);

