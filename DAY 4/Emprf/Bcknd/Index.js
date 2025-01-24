const express = require('express')
const cors=require('cors')
const app = express()
require('./Connection')
var EmpMode = require('./Model/Employee')
const { data } = require('react-router-dom')


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.get('/trail', (req, res) => {
    res.send('it is a trail message')
})

app.post('/add', async (req, res) => {
    try {
        await EmpMode(req.body).save()
        res.send(message='message Recieved')
    } catch (error) {
        console.log(error)
        
    }
})

app.get('/view',async (req, res) => {
    try {
        var data = await EmpMode.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.delete('/delete/:id' ,async (req, res) => {
    try {
        await EmpMode.findByIdAndDelete(req.params.id)
        res.send(message='deleted')
    } catch (error) {
        console.log(error)
    }
})

app.put('/update/:id', async (req, res) => {
    try {
        await EmpMode.findByIdAndUpdate(req.params.id,req.body)
        res.send(message='Updated')
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000, () => {
    console.log("Server is running in 3000")
})