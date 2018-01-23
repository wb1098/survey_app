const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../../config/keys.js');

mongoose.promise = global.Promise;


const User = mongoose.model('users');
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, async (accessToken, refreshToken, profile, done) => {
        //console.log(profile);

        const existingUser = await User.findOne({
            googleId: profile.id
        });

        if (existingUser) {
            //have user already 
            return done(null, existingUser);
        }
        //create new user
        const user = await new User({
            googleId: profile.id
        }).save();
        done(null, user)

    }) //end googlestrategy
);
