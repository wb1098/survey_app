const passport = require('passport');

module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))



    app.get('/auth/google/callback',
        passport.authenticate('google', {
            failureRedirect: '/login'
        }),
        function (req, res) {
            // Successful authentication, redirect home.
            res.redirect('/');
        });


    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public/html/index.html');
    })

    app.use((function (req, res) {
        res.sendStatus(404);
    }))

}
