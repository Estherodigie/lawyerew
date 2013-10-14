'use strict';

//var statik = require('statik');
//var server = statik.createServer('.');
//server.listen();

//
//var sendgrid  = require('sendgrid')(
//  process.env.SENDGRID_USERNAME,
//  process.env.SENDGRID_PASSWORD
//);
//
//var payload   = {
//  to      : 'brettwiesner@gmail.com',
//  from    : 'from@other.com',
//  subject : 'Saying Hi',
//  text    : 'This is my first email through SendGrid'
//};
//
//sendgrid.send(payload, function(err, json) {
//  if (err) { console.error(err); }
//  console.log(json);
//});

//var express = require("express");
//var app = express();
//app.use(express.logger());
//
//app.get('/', function(request, response) {
//  response.send('Hello World!');
//});
//
//var port = process.env.PORT || 5000;
//app.listen(port, function() {
//  console.log("Listening on " + port);
//});

//var express = require('express');
//var app = express();
//
//app.use(express.logger('dev'));
//app.post('/index.html');
//app.listen(process.env.PORT || 5000)

var express = require('express');

var path = require('path');

var app = express();

app.configure(function(){
  'use strict';
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.static(path.join(__dirname, '../dist')));
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  'use strict';
  console.log('server started '+port);
});
