const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    
    app.get('/api/surveys/thanks', (req,res) => {
        
        res.send('You ROCK! Thanks for participating in our survey!')
    })
    
    app.post('/api/surveys', requireLogin, requireCredits, async (req,res) => {
        const {title, subject, body, recipients } = req.body;
        
        const survey = new Survey({
            title,
            subject,
            body,
            //add in a re-direct url for each answer or from the toal score of answers if more than one question
            recipients: recipients.split(',').map(email => ({ email : email.trim() })),
            _user : req.user.id,
            sentDate : Date.now()
        });
        
        //send email here
        
        const mailer = new Mailer(survey, surveyTemplate(survey));
        
        try {
        await mailer.send();
        
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();
        
        res.send(user);
        } catch (err){
            res.status(422).send(err);
        }
    });
}