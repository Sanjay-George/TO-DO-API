var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
	res.send('Welcome to TO DO API');
});

app.listen(PORT , function(){
	console.log('Server running on PORT:'+PORT);
});
