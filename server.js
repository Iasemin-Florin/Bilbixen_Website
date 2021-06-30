const express = require('express')
const app = express()

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {

})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', (req, res) => {

})

app.get('/smallcar', (req, res) => {
    res.render('smallcar.ejs')
})

app.post('/smallcar', (req, res) => {

})

app.get('/mediumcar', (req, res) => {
    res.render('mediumcar.ejs')
})

app.post('/mediumcar', (req, res) => {

})

app.get('/largecar', (req, res) => {
    res.render('largecar.ejs')
})

app.post('/largecar', (req, res) => {

})

app.listen(3000)