var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var foobuf = new Buffer(fs.readFileSync("index.html"));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.send(foobuf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
