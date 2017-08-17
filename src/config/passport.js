const passport = require('passport')
const BearerStrategy = require('passport-http-bearer').Strategy
const user = require('../userDB')


const tokenStrategy = new BearerStrategy((token, done) => {
    return token == 'aaa' ? done(null, user[0]) : done(null, flase)
})


module.exports = passport.use(tokenStrategy)