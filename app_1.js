var port = process.env.VCAP_APP_PORT || 8080;
//Express Web Framework, and create a new express server
var express = require('express'),
app = express();
// In case the caller calls GET to the root '/', return 'Hello Express!'.
app.get('/', function(req, res) {
res.send('Hello Express!');
});
// In case the caller calls POST to /author, return 'Author name'
app.post('/author', function(req, res) {
res.send('Author name');
});
// start server on the specified port and binding host
app.listen(port);