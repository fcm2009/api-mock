const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())


let user = [{
    id: 1,
    name: 'Mohammed',
    age: 30
}]

app.get('/', function (req, res) {
    res.json('Hello World!')
})

app.get('/user/:id', ({ params: { id } }, res) => {
    res.json(user[id])
})

app.post('/user/:id', ({ params: { id }, body }, res) => {
    Object.assign(user[id], body)
    res.json(user[id])
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
