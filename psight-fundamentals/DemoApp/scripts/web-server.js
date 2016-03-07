var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var events = require('./eventsController');
var app = express();
var roothPath = path.normalize(__dirname + '/../');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(roothPath + '/app'));

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);
app.get('/data/event', events.getAll);
app.listen(8000);
console.log('Listening on port 8000...');
