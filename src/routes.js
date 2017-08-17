const router = require('express').Router()
const passport = require('passport')
const user = require('./userDB')

router.get('/', passport.authenticate('bearer', { session: false }), function (req, res) {
    res.json('Hello World!')
})

router.get('/user/:id', passport.authenticate('bearer', { session: false }), ({ params: { id } }, res) => {
    res.json(user[id])
})

router.post('/user/:id', passport.authenticate('bearer', { session: false }), ({ params: { id }, body }, res) => {
    Object.assign(user[id], body)
    console.log(user[id])
    res.json(user[id])
})

router.post('/login', ({ body: { username, password } }, res) => {
    console.log(username, password)
    if(user[0].username == username && user[0].password == password)
        return res.send({ token: 'aaa'})
    else
        return res.sendStatus(401)
})


module.exports = router