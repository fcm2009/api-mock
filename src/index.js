//@flow
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./routes')
const passport = require('./config/passport')


app.use(bodyParser.json())
app.use(cors())
app.use(passport.initialize())
app.use(morgan('tiny'))
app.use(routes)


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
