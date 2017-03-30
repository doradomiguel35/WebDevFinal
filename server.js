//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/home.html'));
});
app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about.html'));
});
app.get('/logan', function(req, res){
  res.sendFile(path.join(__dirname, 'views/logan.html'));
});
app.get('/wolverine2013', function(req, res){
  res.sendFile(path.join(__dirname, 'views/wolverine2013.html'));
});
app.get('/wolverineorigins', function(req, res){
  res.sendFile(path.join(__dirname, 'views/wolverineorigins.html'));
});
app.get('/xmenlast', function(req, res){
  res.sendFile(path.join(__dirname, 'views/xmenlast.html'));
});
app.get('/xmen', function(req, res){
  res.sendFile(path.join(__dirname, 'views/xmen.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});