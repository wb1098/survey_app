const keys = require('../config/keys');
//var stripe = require('stripe')(keys.stripeSecretKey);
//var stripe = require('stripe')(keys.stripePublishableKey);

const stripe = require('stripe')('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {

    app.post('/api/stripe', requireLogin, async (req,res) => {

        const charge = await stripe.charges.create ({
            amount: 500,
            currency: 'usd',
            description: '5 Survey/Email Credits',
            source: req.body.id
        });
        
        console.log(charge);
        req.user.credits += 5;        
        const user = await req.user.save();        
        res.send(user);
    });
};

