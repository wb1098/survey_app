const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
require('./public/models/User')
require('./public/services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    }))

app.use(passport.initialize());
app.use(passport.session());

require('./public/routes/authRoutes')(app);
require('./public/routes/billingRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));    
    const path = require('path');
    app.get('*', (req,res) => {        
       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); 
    });
    
}


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
