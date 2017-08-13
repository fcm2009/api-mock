//@flow
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('tiny'))


let user = [{
    id: 0,
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
