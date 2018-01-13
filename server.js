const express = require('express');
require('./public/services/passport');


const app = express();
require('./public/routes/authRoutes')(app);


var currentPort;
if (process.env.ENVIRONMENT === 'local') {
    currentPort = 5000;
} else {
    currentPort = process.env.PORT;
}

var server = app.listen(currentPort, function () {
    console.log('Express server listening on port %s.', currentPort);
    console.log('Thanks for waiting... the app is ready for action.')
})
