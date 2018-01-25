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
            res.redirect('/surveys');
        });

    app.get('/api/logout', (req, res) => {        
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {        
        res.send(req.user);
    });
    

    app.get('/', function (req, res) {
        res.sendFile('/public/html/index.html', {
            root: './'
        });
    });
   
    
//====================    
//        app.post('/api/stripe', (req,res) => {
//        
//      if(req.body){
//        console.log('auth', 'auth 14');
//    }
//
//        console.log(req.body)  
//        res.send('Working');
//    });

    
    
//    app.use((function (req, res) {
//        res.sendStatus(404);
//    }));

}
