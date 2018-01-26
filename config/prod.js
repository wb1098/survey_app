//prod.js - production keys in here
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey: 'pk_test_sWBeQ1yY5Dt9MhFVq4qksk8y',
    stripeSecretKey: process.env.STRIPE_SECRET_KEY
};


//mongodb://prod-customersurvey:Survey2018@ds253587.mlab.com:53587/customer-survey-prod
