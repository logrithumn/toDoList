var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.listen(port);

app.use(express.static(__dirname + '/../release'))
  .get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

var router = require('./routes/router');

app.use('/', router);

console.log('serving port ' + port);
