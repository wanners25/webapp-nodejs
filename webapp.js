const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./forecast.js')
const geocode = require('./geocode.js')
const app = express()

console.log(__dirname)
console.log(__filename)

//const dirpath = path.join(__dirname, '/index.html')
//console.log(dirpath)
const partialpath = path.join(__dirname, '/template')
console.log(partialpath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialpath)

app.use(express.static(__dirname))

app.get('', (req, res) => {

    res.render('index')
})

app.get('/weather', (req, res) => {
    if (! req.query.address) {
        return res.send ( {
            Error : 'You must enter Address'
        })
    }else {
     geocode(req.query.address, (error, data) => {
          forecast(data.longitude, data.latitude, (error, data) => {
            res.send ( {
                time : data.time,
                temp : data.temp
            })
      
          })
        })
    }}
    )




app.listen(3000, () => {
    console.log('listening to port ... ')
})