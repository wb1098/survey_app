// keys.js - figure out what set of credentials to return

if (process.emv.NODE_ENV === 'production') {
    // we are in production - return the prod set of keys
    module.exports = require('./prod');
} else {
    //we're in dev - return the dev keys
    module.exports = require('./dev');
}
