var express = require('express'),
    busboy  = require('connect-busboy'),
    fs = require('fs');

var app = express();

app.use(busboy({ immediate: true,}));

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(express.static(__dirname + '/../bower_components'));


app.post('/api/test/upload', function(req, res) {
	if(req.headers['content-length']>1000000){
		res.statusCode = 500;
		res.send("File too large");
	}
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        fstream = fs.createWriteStream(__dirname + '/sounds/' + filename);
        file.pipe(fstream);
        fstream.on('close', function () {
            res.statusCode = 200;
			res.send();
        });
    });
});

app.listen(7076);