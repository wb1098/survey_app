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

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send('You have logged out');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });


    app.get('/', function (req, res) {
        res.sendFile('/public/html/index.html', {
            root: './'
        });
    });


    app.use((function (req, res) {
        res.sendStatus(404);
    }));

}
