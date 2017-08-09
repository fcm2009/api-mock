const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())


let user = {
    id: 1,
    name: 'Mohammed',
    age: 30
}

app.get('/', function (req, res) {
    res.json('Hello World!')
})

app.get('/user', (req, res) => {
    res.json(user)
})

app.post('/user', ({ body }, res) => {
    Object.assign(user, body)
    res.json(user)
})




app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
