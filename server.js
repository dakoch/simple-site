
var express = require("express"), app = express();

var quotes = ["Have a nice day", "Make my day", "Good Day!"];

//var jokes  = [ "how many programmers", "It's a hardware problem" ],
 //            [ ]

var joke0 = { 'setup' : "how many programmers", 'punchline' : "It's a hardware problem"};
var joke1 = { 'setup' : "Too many programmers", 'punchline' : "It's a software problem"};
var joke2 = { 'setup' : "How many managers", 'punchline' : "None"};

var jokes = [ joke0, joke1, joke2 ];

// app.get("/", function(req,res) { 
//	res.send("Hello Universe!");
//});

//app.get("/inspiration", function(req,res) { 
//	var random = Math.floor( Math.random() * quotes.length ) ;
//	res.send( "---> " + quotes[random] );
//});

app.get("/joke", function(req,res) { 
	var random = Math.floor( Math.random() * jokes.length ) ;
	res.send( "--->  Q: " + jokes[random].setup + "   P:" + jokes[random].punchline );
});

console.log("server starting, available at http://localhost:3000");
app.listen(3000);