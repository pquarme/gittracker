var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.use(express.static(__dirname + '/public'));

app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(8009);