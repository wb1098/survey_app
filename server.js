const express = require('express');
const app = express();

var currentPort;
if (process.env.ENVIRONMENT === 'local') {
    currentPort = 8080;
} else {
    currentPort = process.env.PORT;
}

app.use(express.static('./public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/html/index.html');
})

app.use((function (req, res) {
    res.sendStatus(404);
}))

var server = app.listen(currentPort, function () {
    console.log('Express server listening on port %s.', currentPort);
    console.log('Thanks for waiting... the app is ready for action.')
})
