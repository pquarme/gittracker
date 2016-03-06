var express = require('express');
var cors = require('cors');
var app = express();

//app.use(cors({credentials: true, origin: true}));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(app.get('port'));