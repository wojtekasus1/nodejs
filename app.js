const express = require('express')
const { hostname } = require('os')
const port = 3000
const hostname = '0.0.0.0'
const generateTitle = () =>{
    return 'Nodejs'
}

const app = express()
app.set('view engine', 'hbs')

app.get('/', (req, res) => {

const title = generateTitle()

    res.render('index',{
        pageTittle: title,
        pagebody: 'hi node'
    })
})

app.get('/kontakt', (req, res) => {
    res.send('Dane kontaktowe')
})
app.listen(port, hostname)